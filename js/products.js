window.onload = function(){
    const arr = [{code:'001', name:'씨솔트 카라멜 콜드 브루', img_src:'coffee1.jpeg'},
                {code:'002', name:'나이트로 바닐라 크림', img_src:'coffee2.jpeg'},
                {code:'003', name:'돌체 콜드 브루', img_src:'coffee3.jpeg'},
                {code:'004', name:'리저브 나이트로', img_src:'coffee4.jpeg'},
                {code:'005', name:'리저브 콜드 브루', img_src:'coffee5.jpeg'},
                {code:'006', name:'민트 콜드 브루', img_src:'coffee6.jpeg'},
                {code:'007', name:'바닐라 크림 콜드 브루', img_src:'coffee7.jpeg'},
                {code:'008', name:'시그니처 더 블랙 콜드 브루', img_src:'coffee8.jpeg'},
                {code:'009', name:'여수 윤슬 헤이즐넛 콜드브루', img_src:'coffee9.jpeg'},
                {code:'010', name:'오트 콜드 브루', img_src:'coffee10.jpeg'},
                {code:'011', name:'제주 비자림 콜드 브루', img_src:'coffee11.jpeg'},
                {code:'012', name:'나이트로 콜드 브루', img_src:'coffee12.jpeg'}
            ]

    let arr_len = arr.length;
    let parentObj = document.querySelector("body")
    let containerDiv

    for(let i = 0; i < arr_len; i++){
        if(i % 4 ==0){
            containerDiv = document.createElement("div");
            containerDiv.setAttribute('class', 'g')
            parentObj.appendChild(containerDiv)
        }
        
        let divObj = document.createElement('div')
        divObj.setAttribute('id', 'g'+(i+1))

        let imgElement = document.createElement("img")
        imgElement.setAttribute("src", "../images/coffee" + (i+1) + ".jpeg")
        imgElement.setAttribute("alt", arr[i].code)
        divObj.appendChild(imgElement)

        let brObj = document.createElement("br")
        divObj.appendChild(brObj)

        let textElement = document.createElement("a")
        textElement.textContent = arr[i].name
        divObj.appendChild(textElement)

        containerDiv.appendChild(divObj)
    }
    //-----------------------------//


    // --- 상품 click event handler START ---
    const tdObjs = document.querySelectorAll('div.g>div>img')
    tdObjs.forEach(function(tdObj, index){
        // 고전
        // tdObj.onclick = function(event){ // div>div>img
        //     console.log(event.target) // img
        //     console.log(event.currentTarget) // div
        //     console.log(this) // div
        //     alert('클릭됨')
        // }

        tdObj.onclick = (event)=>{ // div>div>img
            // console.log(event.target) // img
            // console.log(event.currentTarget) // div
            // console.log(this) // window
            // alert('클릭됨')
            const classValue = event.currentTarget.getAttribute('alt')
            console.log(classValue)
            // const prodNo = classValue.split(' ')[1]
            location.href = './product.html?prodNo=' + classValue
        }
        // 표준화 : tdObj.addEventListener('click', function(){})
    })
    //--- 상품 click event handler END ---
}