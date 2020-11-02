let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item.id
        aa.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/5.json")
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log("request.response")
      console.log(request.response)
      let object = JSON.parse(request.response)
      console.log("object")
      console.log(object)
      xName.textContent = object.name + object.age
    }
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/4.xml")
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName("warning")[0].textContent
        console.log(text.trim())
      }
    }
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/3.html")
  request.onload = () => {
    const div = document.createElement("div")
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => {}
  request.send()
}
getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("get", "/2.js")
  request.onload = () => {
    console.log(request.response)
    const script = document.createElement("script")
    script.innerHTML = request.response
    document.body.appendChild(script)
  }
  request.onerror = () => {}
  request.send()
}
getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/style.css")
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("下载完成了")
        const style = document.createElement("style")
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        alert("加载css失败")
      }
    }
  }
  request.onerror = () => {
    console.log("失败了")
  }
  request.send()
}
