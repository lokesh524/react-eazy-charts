export const getPlotChart =  {
            title: [
              {
                text: 'Michelson-Morley Experiment',
                left: 'center'
              },
            
            ],
            dataset: [
              {
                // prettier-ignore
                source: [
                          [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                      ]
              },
              {
                transform: {
                  type: 'boxplot',
                  config: { itemNameFormatter: 'expr {value}' }
                }
              },
              {
                fromDatasetIndex: 1,
                fromTransformResult: 1
              }
            ],
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '10%',
              right: '10%',
              bottom: '15%'
            },
            xAxis: {
              type: 'category',
              boundaryGap: true,
              nameGap: 10,
              splitArea: {
                show: false
              },
              splitLine: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              name: 'km/s minus 299,000',
              splitArea: {
                show: true
              }
            },
            series: [
              {
                name: 'boxplot',
                type: 'boxplot',
                datasetIndex: 1
              },
              {
                name: 'outlier',
                type: 'scatter',
                datasetIndex: 2
              }
            ]
          }