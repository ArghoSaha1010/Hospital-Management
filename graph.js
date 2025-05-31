const data1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Patients',
      data: [65, 59, 80, 81, 56, 55, 73],
      borderColor: 'teal',
      tension: 0.1,
      fill: false
    }]
  };
  
  const data2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Profits',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'purple',
      tension: 0.1,
      fill: false
    }]
  };
  
  new Chart(document.getElementById('myChart1'), {
    type: 'line',
    data: data1
  });
  
  new Chart(document.getElementById('myChart2'), {
    type: 'line',
    data: data2
  });
  