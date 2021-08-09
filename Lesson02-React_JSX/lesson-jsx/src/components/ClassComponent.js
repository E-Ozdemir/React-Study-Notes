import React, { Component} from "react";

class ClassComponent extends Component{
    render (){
        return(
            <div>
                <p>This is a <b>class</b> component</p>
            </div>
        )
    }
}
export default ClassComponent;








// ------türkce ders kodlari-------
// export default class ClassComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {surname: "Asinmamis"}
//     }
//     render(){
//         return(
//             <div className="wrapper">
//                 <h1>Emre Özdemir</h1>
//                 <p>{this.props.name}</p>
//                 {/* classcomponent'lerde state'lere ve propslara this kullanmak zorundayiz. */}
//                 <p>{this.state.surname}</p>
//             </div>
//         );
//     }
// }

// export default ClassComponent;