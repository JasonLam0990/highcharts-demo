function line(array0, array1, array2, array3, array4, array5, array6, array7){
    $(document).ready(function() {
        var title = {
            text: '表情时刻分布图'
        };
        var subtitle = {
            text: ''
        };
        var xAxis = {
            categories: array0
        };
        var yAxis = {
            title: {
                text: '人数 (人)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        };

        var tooltip = {
            valueSuffix: '人'
        }

        var legend = {
            layout: 'horizontal',
            align: 'center',
            borderWidth: 0
        };

        var series =  [
            {
                name: '高兴',
                data: array1
            },
            {
                name: '伤心',
                data: array2
            },
            {
                name: '专注',
                data: array3
            },
            {
                name: '生气',
                data: array4
            },
            {
                name: '低落',
                data: array5
            },
            {
                name: '紧张',
                data: array6
            },
            {
                name: '平和',
                data: array7
            },

        ];


        var json = {};

        json.title = title;
        json.subtitle = subtitle;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.tooltip = tooltip;
        json.legend = legend;
        json.zoomType = 'x';
        json.series = series;
        json.credits = {
            enabled: false //不显示LOGO
        }

        $('#container-line').highcharts(json);
    });
}