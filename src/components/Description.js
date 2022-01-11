import React, { useState, useEffect } from "react"

const Description = ({ description, index }) => {
  const query = "mention"
  const [highlighted, setHighlight] = useState([])
  const [bgColor, setBgColor] = useState("transparent")
  const [finalDescArr, setFinalDescArr] = useState([])

  const highlight = (text) => {}
  let breakpointIndexes = []
  let cleanArray = []

  const analyseDesc = (description, query, index) => {
    let newText = description.split(" ")
    let textWithoutSpecChars = []
    // console.log(newText)
    for (let i = 0; i < newText.length; i++) {
      textWithoutSpecChars.push(newText[i].replace(/[^\w\s]/gi, ""))
    }
    console.log(textWithoutSpecChars)

    for (let i = 0; i < textWithoutSpecChars.length; i++) {
      // console.log(index)
      // console.log(textWithoutSpecChars[i])
      // console.log("i")
      // console.log(i)
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
        breakpointIndexes.push(i)
      }
    })
    // console.log(cleanArray)

    // console.log(description)
    // return description
  }

  useEffect(() => {
    analyseDesc(description, query, index)
  }, [])

  useEffect(() => {
    console.log("cleanArray")
    console.log(cleanArray)
  }, [cleanArray])

  useEffect(() => {
    console.log("breakpointIndexes")
    console.log(breakpointIndexes)
  }, [breakpointIndexes])

  useEffect(() => {
    console.log("index de la mention")
    console.log(index)
  }, [index])

  const displayDesc = (cleanArray, breakpointIndexes) => {}

  useEffect(() => {
    if (cleanArray.length) {
      cleanArray.map((e, i) => {
        breakpointIndexes.map((bkptindex) => {
          bkptindex === i
            ? finalDescArr.push({ value: e, color: "yellow" })
            : finalDescArr.push({ value: e, color: "transparent" })
        })
      })
    }

    return () => setFinalDescArr([])
  }, [cleanArray])

  useEffect(() => {
    console.log("finalDescArr")
    console.log(finalDescArr)
  }, [finalDescArr])

  // <div>{index === 8 ? analyseDesc(description, query, index) : null}</div>

  return finalDescArr.length ? (
    finalDescArr.map((e) => (
      <span style={{ bgColor: e.color }}>
        {/* <span style={{ bgColor: displayDesc(cleanArray, breakpointIndexes) }}> */}
        {e.value}
        {/* </span> */}{" "}
      </span>
    ))
  ) : (
    <div>null</div>
  )
}

export default Description
