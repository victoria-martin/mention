import React, { useState, useEffect } from "react"

const Description = ({ description, index }) => {
  const query = "mention"
  const [highlighted, setHighlight] = useState([])
  const [bgColor, setBgColor] = useState("transparent")
  const [finalDescArr, setFinalDescArr] = useState([])

  let breakpointIndexes = []
  let cleanArray = []
  const analyseDesc = (description, query, index) => {
    let textArr = description.split(" ")
    let textWithoutSpecChars = []
    for (let i = 0; i < textArr.length; i++) {
      textWithoutSpecChars.push(textArr[i].replace(/[^\w\s]/gi, ""))
    }

    // puts all values in LowerCase

    for (let i = 0; i < textWithoutSpecChars.length; i++) {
      textWithoutSpecChars[i] = textWithoutSpecChars[i].toLowerCase()
      // if (textWithoutSpecChars[i] === query) {
      //   console.log("i")
      //   console.log(i)
      // }
    }

    for (let i = 0; i < textWithoutSpecChars.length; i++) {
      if (textWithoutSpecChars[i] !== "") {
        cleanArray.push(textWithoutSpecChars[i])
      }
    }

    cleanArray.map((e, i) => {
      if (e === query) {
        // console.log(e)
        // console.log(i)
        // console.log("ici")

        // attention les breakointIndexes doivent prendre en coilmptes les index sans le remove de characters
        breakpointIndexes.push(i)
      }
    })
  }

  useEffect(() => {
    analyseDesc(description, query, index)
    // return () => {
    //   setFinalDescArr([])
    // }
  }, [])

  useEffect(() => {
    if (cleanArray.length)
      cleanArray.map((e, i) => {
        breakpointIndexes.map((bkptindex) => {
          bkptindex === i
            ? setFinalDescArr((finalDescArr) => [
                ...finalDescArr,
                { value: e, color: "yellow" },
              ])
            : setFinalDescArr((finalDescArr) => [
                ...finalDescArr,
                { value: e, color: "transparent" },
              ])
        })
      })

    return () => setFinalDescArr([])
  }, [])

  // useEffect(() => {
  //   console.log("cleanArray")
  //   console.log(cleanArray)
  // }, [cleanArray])

  // useEffect(() => {
  //   console.log("breakpointIndexes")
  //   console.log(breakpointIndexes)
  // }, [breakpointIndexes])

  // useEffect(() => {
  //   console.log("index de la mention")
  //   console.log(index)
  // }, [index])

  // useEffect(() => {
  //   console.log("finalDescArr")
  //   console.log(finalDescArr)
  //   console.log(finalDescArr.length)
  // }, [finalDescArr])

  return finalDescArr.length ? (
    finalDescArr.map((e) => (
      <span style={{ backgroundColor: e.color }}>
        {/* <span style={{ bgColor: displayDesc(cleanArray, breakpointIndexes) }}> */}
        {e.value}
        {/* </span> */}{" "}
      </span>
    ))
  ) : (
    <div>{description}</div>
  )
}

export default Description
