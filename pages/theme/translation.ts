export const translation = {
    increase:{
        cn:'增加',
        en:'Increase'
    },
    decrease:{
        cn:'减少',
        en:'Decrease'
    },
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
            defaultColor:{
                cn:'默认主题色',
                en:'Default Color'
            },
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
    label:{
        cn:'文本样式',
        en:'Label',
        sub:{
            defaultLabel:{
                cn:'默认文本配置',
                en:'Default Label'
            },
            fontColor:{
                cn:'文本颜色',
                en:'Font Color'
            },
            fontSize:{
                cn:'字体大小',
                en:'Font Size'
            },
            offset:{
                cn:'字体偏移量',
                en:'Text Offset'
            },
            innerLabel:{
                cn:'内部文本配置',
                en:'Inner Label'
            },
            innerFontSize:{
                cn:'内部字体大小',
                en:'Inner FontSize'
            },
            innerFill:{
                cn:'内部字体颜色',
                en:'Inner FontColor'
            }
        }
    },
    axis:{
        cn:'坐标轴',
        en:'Axis',
        sub:{
            fontColor:{
                cn:'字体颜色',
                en:'Font Color'
            },
            fontSize:{
                cn:'字体大小',
                en:'Font Size'
            },
            lineHeight:{
                cn:'行高',
                en:'Line Height'
            },
            lineStroke:{
                cn:'坐标轴线颜色',
                en:'Axis Line Stroke'
            },
            tickLineWidth:{
                cn:'刻度线宽度',
                en:'TickLine Width'
            },
            tickLineLength:{
                cn:'刻度线长度',
                en:'TickLine Length'
            },
            tickLineColor:{
                cn:'刻度线颜色',
                en:'TickLine Color'
            },
            gridColor:{
                cn:'网格线颜色',
                en:'Grid Color'
            },
            girdWidth:{
                cn:'网格线宽度',
                en:'Grid Width'
            }
        }
    },
    legend:{
        cn:'图例',
        en:'Legend',
        sub:{
            height:{
                cn:'高度',
                en:'Height'
            },
            itemGap:{
                cn:'图例项间距',
                en:'Item Gap'
            },
            offset:{
                cn:'偏移量',
                en:'Offset'
            },
            fontSize:{
                cn:'字体大小',
                en:'Font Size'
            },
            lineHeight:{
                cn:'行高',
                en:'Line Height'
            },
            fill:{
                cn:'字体颜色',
                en:'Font Color'
            },
            unCheckColor:{
                cn:'未选中项颜色',
                en:'UnCheckColor'
            }
        }
    },
    tooltip:{
        cn:'提示框',
        en:'Tooltip',
        sub:{
            crosshairs:{
                cn:'辅助线',
                en:'Crosshairs'
            },
            offset:{
                cn:'偏移量',
                en:'Offset'
            },
            fontSize:{
                cn:'字体大小',
                en:'fontSize'
            },
            borderRadius:{
                cn:'倒角大小',
                en:'Border Radius'
            },
            lineHeight:{
                cn:'行高',
                en:'LineHeight'
            },
            color:{
                cn:'字体颜色',
                en:'Font Color'
            }
        }
    },
    download:{
        cn:'主题下载',
        en:'Theme Download',
        sub:{
            titText:{
                cn:'下载主题并引入后，可以在Viser中使用该主题',
                en:'Download theme and import it,you can use theme in Viser'
            },
            download:{
                cn:'下载',
                en:'Download'
            },
            copy:{
                cn:'复制',
                en:'Copy'
            },
            close:{
                cn:'关闭',
                en:'Close'
            },
            js:{
                cn:'JS 版本',
                en:'JS Version',
                sub:{
                    text1:{
                        cn:'下载或复制以下的主题保存至 *.js 文件;',
                        en:'Download or copy theme text and save as *.js file;'
                    },
                    text2:{
                        cn:'将该文件在在组件中引用',
                        en:'Import this file in your project;'
                    }
                }
            },
            json:{
                cn:'JSON 版本',
                en:'JSON Version',
                sub:{
                    text1:{
                        cn:'下载或复制以下的主题保存至 *.json 文件;',
                        en:'Download or copy json text save as *.json file;'
                    },
                    text2:{
                        cn:'读取该 JSON 文件，并使用 obj = JSON.parse(data) 将其转换成对象;',
                        en:'Read json file and use obj = JSON.parse(data) to parse json string to object;'
                    }
                }
            },
            copytip:{
                cn:'复制成功！',
                en:'复制失败！'
            }
        }
    }
}

export const getTransText = (key: string, language: string): any => {
    //key只能是两级，翻译只体现在一个功能块和功能块下的文案
    if (!language) {
        return null;
    }
    if (/\//g.test(key)) {
        const keys = key.split('/');
        const len=keys.length-1;
        if (!translation[keys[0]]) {
            return null;
        }
        let temp=translation;
        keys.forEach((item,index)=>{
            if(index>=len){
                return temp=temp[item];
            }
            temp=temp[item]['sub'];
        });
        return temp[language];
    }
    if (!translation[key]) {
        return null;
    }
    return translation[key][language];
}
