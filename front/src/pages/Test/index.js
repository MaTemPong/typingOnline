import { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [test, setTest] = useState('test');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/`)
            .then(res => setTest(res.data.message))
    })
    return (
        <>{test}</>
    )
}

export default Test