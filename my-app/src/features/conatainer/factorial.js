import React, {useState} from "react";
import { connect } from "react-redux";

const Factorial = () =>{
    const [fact, setFact] = useState(0);

    useEffect(()=> {
        const factorialize = (num) => {
          if (num < 0) return -1;
          else if (num === 0) return 1;
          else {
             return num * factorialize(num - 1);
          } 
        }
        setFact(factorialize(props.value));
      }, [props.value]);
      props.factData(fact);
    }

    export default connect(mapStateToProps)(Factorial);