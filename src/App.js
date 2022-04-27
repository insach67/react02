import React, { useState } from 'react';
import style from './components/Home.module.css';
import Card from './components/Card';
const App = (props) => {
    
    const [data, setData] = useState(1);

    const increment = () => {
        setData(data+1);
    }

    const appData = [
        {
            name:"Duck",
            url:'http://duck.com'
        },
        {
            name:"Google",
            url:'http://google.com'
        },
        {
            name:'Yahoo',
            url:'http://yahoo.com'
        }
    ]

    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          
            <h1 style={{textAlign:'center'}}>{data} {props.name}</h1>
            {
                appData.map((dummyData) => (
                    <Card data={dummyData} />
                ))
            }

            <button className={style.btn} onClick={increment}>COUNTER</button>
        </div>
    )
};

// class App extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             counter:0
//         }
//     }

//     increment(){
//         this.setState({counter:this.state.counter+1})
//     }

//     render(){
//         return(
//         <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
//             <h1 style={{textAlign:'center'}}>{this.state.counter} {this.props.name}</h1>
//             <button className={styles.btn} onClick={this.increment.bind(this)}>COUNTER</button>
//         </div>
//         )
//     }
// }


export default App;