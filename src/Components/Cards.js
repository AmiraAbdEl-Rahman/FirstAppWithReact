export default function Card(props){
    return <div style={{
        
        width:"400px"
          }}>
        <img src={props.img} style={{width:"400px", height:"400px",
        borderRadius:"15px",
    }} alt="img"/>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            marginBottom:"0"
              }}>
        <h1>{props.title}</h1>
        <h3>{props.rate}
        <i className="fa-solid fa-star" style={{color:"yellow"}}></i></h3>
        </div>
        <p style={{color: "gray", marginTop:"0"}}>{props.desc}</p>
        
        <h2>{props.price} night </h2>

    </div>;
    }
