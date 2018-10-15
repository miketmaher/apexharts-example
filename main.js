//chart options
const options = {
  chart: {
    height: 450,
    width: '100%',
    type: 'bar',
    background: '#f4f4f4',
    foreColor: '#333'
  },
  series: [
    {
      name: 'Population',
      data: [
        8550405,
        3971883,
        2720546,
        1567445,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908
      ]
    }
  ],
  xaxis: {
    categories: [
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'Philadelphia',
      'Phoenix',
      'San Antonio',
      'Dallas',
      'San Jose'
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ['#f44336']
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Largest US Cities by polulation',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }
  }
};

//init chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

//render chart
chart.render();

let isHozizontal = false;

document.querySelector('button').addEventListener('click', () => {
  isHozizontal = !isHozizontal;
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: isHozizontal
      }
    }
  });
});
