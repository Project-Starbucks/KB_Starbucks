window.onload = function(){

    let imgArr = ['../images/coffee1.jpeg', '../images/coffee2.jpeg', '../images/coffee3.jpeg',
        '../images/coffee4.jpeg', '../images/coffee5.jpeg', '../images/coffee6.jpeg',
        '../images/coffee7.jpeg', '../images/coffee8.jpeg', '../images/coffee9.jpeg',
        '../images/coffee10.jpeg', '../images/coffee11.jpeg', '../images/coffee12.jpeg'
    ];
    let titleArr = ['씨솔트 카라멜 콜드 브루', '나이트로 바닐라 크림', '나이트로 콜드 브루', 
        '돌체 콜드 브루', '리저브 나이트로', '리저브 콜드 브루', 
        '민트 콜드 브루', '바닐라 크림 콜드 브루', '시그니처 더 블랙 콜드 브루', 
        '여수 윤슬 헤이즐넛 콜드브루', '오트 콜드 브루', '제주 비자림 콜드 브루'
    ]

    let bodyObj = document.querySelector('body')
    let gridObj

    for (let i = 0; i < 12; i++){
        if (i % 4 == 0){
            gridObj = document.createElement('div')
            gridObj.setAttribute('class', 'g')
            bodyObj.appendChild(gridObj)
        }

        let divObj = document.createElement('div')
        divObj.setAttribute('id', 'g' + (i + 1))

        let imgObj = document.createElement('img')
        imgObj.setAttribute('src', imgArr[i])
        
        let brObj = document.createElement('br')

        let titleObj = document.createElement('a')
        let textObj2 = document.createTextNode(titleArr[i])
        titleObj.appendChild(textObj2)

        gridObj.appendChild(divObj)
        divObj.appendChild(imgObj)
        divObj.appendChild(brObj)
        divObj.appendChild(titleObj)
    }
}