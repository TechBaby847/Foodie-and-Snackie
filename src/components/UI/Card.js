import classes from "./Card.module.css";

const Card = props => {
    console.log(props);
    return <div> <ul className={classes.card}>{props.children}</ul></div>
};



export default Card;
