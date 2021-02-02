import React from 'react';
import Chart from 'chart.js';
//var myChart = new Chart(ctx, {...});
import {Doughnut} from 'react-chartjs-2';



class Grafik extends React.Component {

  state = {
    labels: ['Transportation', 'Lodging', 'Food','Other'],
    datasets: [
      {
        label: '',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81]
      }
    ]
  }

  addData=(data) =>{
   console.log("addData yım");
//this.state.datasets.forEach((dataset) => { 
   this.setState({
    ...this.state.dataset[0],
      data: data
   });
      
 // });

}



  render() {

    
   const {data} = this.props;
 
console.log(data)
this.addData(data);
  // this.setState({
  //   datasets: {
  //     ...this.state.datasets,
  //    data:data
  // }


 // });
   
    return (
      <div>
   
        <Doughnut
          data={this.state}
          options={{
            title:{
              display:false,
              text:'',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
   
      </div>
    );
  }
}
export default Grafik;


// function addData(chart, label, data) {
//   chart.data.labels.push(label);
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(data);
//   });
//   chart.update();
// }

// function removeData(chart) {
//   chart.data.labels.pop();
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data.pop();
//   });
//   chart.update();
// }