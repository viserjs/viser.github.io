export const translation = {
    function: {
        cn: '功能',
        en: 'FUNCTION',
        sub: {
            download: {
                cn: '下载',
                en: 'Download'
            },
            import: {
                cn: '导入配置',
                en: 'Import Options'
            },
            export: {
                cn: '导出配置',
                en: 'Export Options'
            },
            refresh: {
                cn: '刷新',
                en: 'Refresh'
            },
            reset: {
                cn: '复原',
                en: 'Reset'
            },
            themname: {
                cn: '主题名称',
                en: 'Theme name'
            },
            seriesNum: {
                cn: '系列数量',
                en: 'Series Number'
            }
        }
    },
    basic: {
        cn: '基本配置',
        en: 'BASIC OPTION',
        sub:{
            bgColor:{
                cn:'背景',
                en:'Background'
            },
            title:{
                cn:'标题',
                en:'Title'
            },
            subtitle:{
                cn:'副标题',
                en:'Subtitle'
            },
            theme:{
                cn:'主题',
                en:'Theme'
            },
            tag:{
                cn:'标签文字',
                en:'Tag Text'
            },
            strokethick:{
                cn:'描边粗细',
                en:'Stroke Thickness'
            },
            stroke:{
                cn:'描边',
                en:'Stroke'
            },
        }
    },
    axis:{
        cn:'坐标轴',
        en:'Axis',
        sub:{

        }
    },
    legend:{
        cn:'图例',
        en:'Legend',
        sub:{

        }
    },
    tooltip:{
        cn:'提示框',
        en:'Tooltip',
        sub:{

        }
    },
    
}

export const getTransText = (key: string, language: string): any => {
    //key只能是两级，翻译只体现在一个功能块和功能块下的文案
    if (!language) {
        return null;
    }
    if (/\//g.test(key)) {
        const keys = key.split('/');
        if (!translation[keys[0]]) {
            return null;
        }
        return translation[keys[0]]['sub'][keys[1]][language];
    }
    if (!translation[key]) {
        return null;
    }
    return translation[key][language];
}