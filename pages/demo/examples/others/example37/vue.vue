<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="0">
      <v-tooltip/>
      <v-interval
        shape="liquid-fill-gauge"
        position="gender*value"
        color="gender"
        :v-style="{
            lineWidth: 10,
            opacity: 0.75
        }"
      />
      <v-guide
        v-for="(row, index) in data"
        :key="index"
        type="text"
        :top="true"
        :position="{
            gender: row.gender,
            value: 50
        }"
        :content="row.value + '%'"
        :v-style="{
            fontSize: 40,
            textAlign: 'center'
        }"
      />
    </v-chart>
  </div>
</template>

<script>
    import { registerShape } from 'viser-vue';
    const G2 = require('@antv/g2');
    const Util = G2.Util;
    const Global = G2.Global;

    const data = [{
        gender: 'male',
        path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
        value: 50
    }, {
        gender: 'middle',
        path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
        value: 25
    }, {
        gender: 'female',
        path: 'M320.96 503.232v105.376h127.872V736.48H320.96v127.872H191.136V736.48H63.296V608.608h127.84v-105.76C81.216 474.208 0 374.56 0 255.712 0 114.496 114.496 0 255.712 0c141.248 0 255.68 114.496 255.68 255.712 0 119.328-79.872 219.264-190.432 247.52zm-65.248-375.36c-70.624 0-127.872 57.216-127.872 127.84 0 70.592 57.248 127.84 127.872 127.84s127.872-57.248 127.872-127.84c0-70.624-57.248-127.84-127.872-127.84z',
        value: 25
    }];
    const scale = [{
        dataKey: 'value',
        min: 0,
        max: 100,
    }];
    function getFillAttrs(cfg) {
        const defaultAttrs = Global.shape.interval;
        const attrs = Util.mix({}, defaultAttrs, {
            fill: cfg.color,
            stroke: cfg.color,
            fillOpacity: cfg.opacity
        }, cfg.style);
        return attrs;
    }

    function getLineAttrs(cfg) {
        const defaultAttrs = Global.shape.hollowInterval;
        const attrs = Util.mix({}, defaultAttrs, {
            stroke: cfg.color,
            strokeOpacity: cfg.opacity
        }, cfg.style);
        return attrs;
    }
    // 水波图
    /**
     * 用贝塞尔曲线模拟正弦波
     * Using Bezier curves to fit sine wave.
     * There is 4 control points for each curve of wave,
     * which is at 1/4 wave length of the sine wave.
     *
     * The control points for a wave from (a) to (d) are a-b-c-d:
     *          c *----* d
     *     b *
     *       |
     * ... a * ..................
     *
     * whose positions are a: (0, 0), b: (0.5, 0.5), c: (1, 1), d: (PI / 2, 1)
     *
     * @param {number} x          x position of the left-most point (a)
     * @param {number} stage      0-3, stating which part of the wave it is
     * @param {number} waveLength wave length of the sine wave
     * @param {number} amplitude  wave amplitude
     * @return {Array} 正弦片段曲线
     */
    function getWaterWavePositions(x, stage, waveLength, amplitude) {
        if (stage === 0) {
            return [
                [x + 1 / 2 * waveLength / Math.PI / 2, amplitude / 2],
                [x + 1 / 2 * waveLength / Math.PI, amplitude],
                [x + waveLength / 4, amplitude]
            ];
        } else if (stage === 1) {
            return [
                [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2),
                    amplitude
                ],
                [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1),
                amplitude / 2
                ],
                [x + waveLength / 4, 0]
            ];
        } else if (stage === 2) {
            return [
                [x + 1 / 2 * waveLength / Math.PI / 2, -amplitude / 2],
                [x + 1 / 2 * waveLength / Math.PI, -amplitude],
                [x + waveLength / 4, -amplitude]
            ];
        }
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2), -amplitude],
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1), -amplitude / 2],
            [x + waveLength / 4, 0]
        ];
    }
    /**
     * 获取水波路径
     * @param  {number} radius          半径
     * @param  {number} waterLevel      水位
     * @param  {number} waveLength      波长
     * @param  {number} phase           相位
     * @param  {number} amplitude       震幅
     * @param  {number} cx              圆心x
     * @param  {number} cy              圆心y
     * @return {Array}  path            路径
     * @reference http://gitlab.alipay-inc.com/datavis/g6/blob/1.2.0/src/graph/utils/path.js#L135
     */
    function getWaterWavePath(radius, waterLevel, waveLength, phase, amplitude, cx, cy) {
        const curves = Math.ceil(2 * radius / waveLength * 4) * 2;
        const path = [];

        // map phase to [-Math.PI * 2, 0]
        while (phase < -Math.PI * 2) {
            phase += Math.PI * 2;
        }
        while (phase > 0) {
            phase -= Math.PI * 2;
        }
        phase = phase / Math.PI / 2 * waveLength;

        const left = cx - radius + phase - radius * 2;
        /**
         * top-left corner as start point
         *
         * draws this point
         *  |
         * \|/
         *  ~~~~~~~~
         *  |      |
         *  +------+
         */
        path.push(['M', left, waterLevel]);

        /**
         * top wave
         *
         * ~~~~~~~~ <- draws this sine wave
         * |      |
         * +------+
         */
        let waveRight = 0;
        for (let c = 0; c < curves; ++c) {
            const stage = c % 4;
            const pos = getWaterWavePositions(c * waveLength / 4, stage, waveLength, amplitude);
            path.push([
                'C',
                pos[0][0] + left, -pos[0][1] + waterLevel,
                pos[1][0] + left, -pos[1][1] + waterLevel,
                pos[2][0] + left, -pos[2][1] + waterLevel
            ]);

            if (c === curves - 1) {
                waveRight = pos[2][0];
            }
        }

        /**
         * top-right corner
         *
         *                       ~~~~~~~~
         * 3. draws this line -> |      | <- 1. draws this line
         *                       +------+
         *                          ^
         *                          |
         *                  2. draws this line
         */
        path.push(['L', waveRight + left, cy + radius]);
        path.push(['L', left, cy + radius]);
        path.push(['L', left, waterLevel]);
        return path;
    }

    /**
     * 添加水波
     * @param {number} x           中心x
     * @param {number} y           中心y
     * @param {number} level       水位等级 0～1
     * @param {number} waveCount   水波数
     * @param {number} colors      色值
     * @param {number} group       图组
     * @param {number} clip        用于剪切的图形
     * @param {number} radius      绘制图形的高度
     */
    function addWaterWave(x, y, level, waveCount, colors, group, clip, radius) {
        const bbox = clip.getBBox();
        const width = bbox.maxX - bbox.minX;
        const height = bbox.maxY - bbox.minY;
        const duration = 5000;
        const delayDiff = 300;
        for (let i = 0; i < waveCount; i++) {
            const wave = group.addShape('path', {
                attrs: {
                    path: getWaterWavePath(
                        radius,
                        bbox.minY + height * level,
                        width / 4, 0, width / 64, x, y
                    ),
                    fill: colors[i],
                    clip
                }
            });
            wave.animate({
                transform: [
                    ['t', width / 2, 0]
                ],
                repeat: true
            }, duration - i * delayDiff);
        }
    }

    registerShape('interval', 'liquid-fill-gauge', {
        draw(cfg, container) {
            const self = this;
            const cy = 0.5;
            let sumX = 0;
            let minX = Infinity;
            Util.each(cfg.points, p => {
                if (p.x < minX) {
                    minX = p.x;
                }
                sumX += p.x;
            });
            const cx = sumX / cfg.points.length;
            const cp = self.parsePoint({ x: cx, y: cy });
            const minP = self.parsePoint({ x: minX, y: 0.5 });
            const xWidth = cp.x - minP.x;
            const radius = Math.min(xWidth, minP.y);
            const attrs = getFillAttrs(cfg);
            const clipCircle = container.addShape('circle', {
                attrs: {
                    x: cp.x,
                    y: cp.y,
                    r: radius
                }
            });
            addWaterWave(
                cp.x, cp.y,
                cfg.y / (2 * cp.y),
                1,
                [attrs.fill],
                container,
                clipCircle,
                radius * 4
            );
            return container.addShape('circle', {
                attrs: Util.mix(getLineAttrs(cfg), {
                    x: cp.x,
                    y: cp.y,
                    r: radius + radius / 8
                })
            });
        }
    });
  export default {
    data() {
      return {
        data,
        scale,
        height: 440,

        getWaterWavePositions,
        getWaterWavePath,
        addWaterWave,
        getFillAttrs,
        getLineAttrs,
      };
    }
  };
</script>