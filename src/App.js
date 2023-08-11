import { data } from "./data";
import Card from "./Components/Cards";
export default function App(){
    const dataShow = data.map(item => <Card img= {item.img} title= {item.title} desc= {item.desc} rate= {item.rate} price= {item.price} />)

    return(
        
        <div style={{display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"20px",
        flexWrap:"wrap"
        }}>
            {dataShow}
        </div>
    )
}