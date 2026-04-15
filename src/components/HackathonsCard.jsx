export const HackathonsCard = ({children}) => {
    return (
        <div>
              <div className="card" style={{width: "18rem"}}>
        <img src={children.Image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">{children.Description}</p>
        </div>
      </div>
        </div>
    );
} 