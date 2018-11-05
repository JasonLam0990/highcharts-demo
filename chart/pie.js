function pie(index1,index2,index3,index4,index5,index6,index7){
    $(document).ready(function() {
        var chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        };
        var title = {
            text: '表情占比情况'
        };
        var tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#515151'
                    }
                },
                showInLegend: true
            }
        };

        var series = [{
            type: 'pie',
            name: '占比：',
            data: [
                ['高兴', index1],
                ['伤心', index2],
                ['专注', index3],
                ['生气', index4],
                ['低落', index5],
                ['紧张', index6],
                ['平和', index7],
            ]
        }];

        credits: {
            enabled: false     //不显示LOGO
        }

        var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        json.credits = {
            enabled: false //不显示LOGO
        }

        $('#container-pie').highcharts(json);
    });
}

