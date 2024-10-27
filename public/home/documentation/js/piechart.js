var chart1 = c3.generate({
    bindto: '#c3chart_pie1',
    data: {
        columns: [
            ['Motorcycles', 50],
            ['4-Wheelers', 14],
            ['Delivery Trucks', 8],
            ['Delivery Vans', 10]
        ],
        type: 'pie'
    },
    pie: {
        label: {
            format: function(value) { return value; }
        }
    }
});
