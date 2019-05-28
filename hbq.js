///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//创建格子类
class Gz {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.id = `gz${x}${y}`
        this.rectangle = document.createElement("div")
    }
    append() {
        this.rectangle.setAttribute("id", `gz${this.x}${this.y}`)
        this.rectangle.setAttribute("name", `no`)
        document.querySelector("#qp").appendChild(this.rectangle)
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//封装一个函数，用于两个场景：
//1：判断每一个格子是否可以落子（提示可行棋格子、判断是否有行动力） 
//2：下棋动作（点击事件）绑定的函数中嵌套的一个函数(用于改变落子后的棋盘的局面)
function rule_() {
    //如果有五个参数时
    if (arguments[4]) {
        var w_b = arguments[0];
        var bg_url = arguments[1];
        var name = arguments[2];
        var x = arguments[3];
        var y = arguments[4]
        //如果有三个个参数时
    } else if (!arguments[3]) {
        var w_b = arguments[0];
        var x = arguments[1];
        var y = arguments[2];
    }
    //五个参数时和三个参数时共用的函数体
    if (document.querySelector(`#gz${x}${y}`).getAttribute("name") == "no") {
        //对提示颜色初始化
        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#293")

        for (var i1 = x + 1; i1 <= 8; i1++) {
            var currentName = document.querySelector(`#gz${i1}${y}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (i1 - x > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var j1 = x; j1 < i1; j1++) {
                            document.querySelector(`#gz${j1}${y}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${j1}${y}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }
        }
        for (var i2 = x - 1; i2 >= 1; i2--) {
            var currentName = document.querySelector(`#gz${i2}${y}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (x - i2 > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var j2 = x; j2 > i2; j2--) {
                            document.querySelector(`#gz${j2}${y}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${j2}${y}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }
        }
        for (var i3 = y + 1; i3 <= 8; i3++) {
            var currentName = document.querySelector(`#gz${x}${i3}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (i3 - y > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var j3 = y; j3 < i3; j3++) {
                            document.querySelector(`#gz${x}${j3}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${x}${j3}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }
        }
        for (var i4 = y - 1; i4 >= 1; i4--) {
            var currentName = document.querySelector(`#gz${x}${i4}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (y - i4 > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var j4 = y; j4 > i4; j4--) {
                            document.querySelector(`#gz${x}${j4}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${x}${j4}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }
        }
        for (var r1 = x + 1, c1 = y + 1; r1 <= 8 && c1 <= 8; r1++ , c1++) {
            var currentName = document.querySelector(`#gz${r1}${c1}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (r1 - x > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var r1_ = x, c1_ = y; r1_ < r1; r1_++ , c1_++) {
                            document.querySelector(`#gz${r1_}${c1_}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${r1_}${c1_}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }
        }
        for (var r2 = x - 1, c2 = y - 1; r2 >= 1 && c2 >= 1; r2-- , c2--) {
            var currentName = document.querySelector(`#gz${r2}${c2}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (x - r2 > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var r2_ = x, c2_ = y; r2_ > r2; r2_-- , c2_--) {
                            document.querySelector(`#gz${r2_}${c2_}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${r2_}${c2_}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }
        }
        for (var r3 = x + 1, c3 = y - 1; r3 <= 8 && c3 >= 1; r3++ , c3--) {
            var currentName = document.querySelector(`#gz${r3}${c3}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (r3 - x > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var r3_ = x, c3_ = y; r3_ < r3; r3_++ , c3_--) {
                            document.querySelector(`#gz${r3_}${c3_}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${r3_}${c3_}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }
        }
        for (var r4 = x - 1, c4 = y + 1; r4 >= 1 && c4 <= 8; r4-- , c4++) {

            var currentName = document.querySelector(`#gz${r4}${c4}`).getAttribute("name")
            if (currentName == "no") {
                break
            } else if (currentName == w_b) {
                continue
            } else {
                if (x - r4 > 1) {
                    if (!arguments[3]) {
                        window.hasAct = 1
                        document.querySelector(`#gz${x}${y}`).setAttribute("style", "background:#3a5")
                    } else if (arguments[4]) {
                        for (var r4_ = x, c4_ = y; r4_ > r4; r4_-- , c4_++) {
                            document.querySelector(`#gz${r4_}${c4_}`).setAttribute("style", bg_url)
                            document.querySelector(`#gz${r4_}${c4_}`).setAttribute("name", name)
                        }
                    }
                    break
                } else {
                    break
                }
            }

        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//初始化游戏
var init = function () {
    //黑旗走第一步
    window.w_or_b = 1
    for (var j = 1; j <= 8; j++) {
        for (var i = 1; i <= 8; i++) {
            window[`gz${i}${j}`] = new Gz(i, j)
            window[`gz${i}${j}`].append()
        }
    }
    document.querySelector("#gz44").setAttribute("style", "background:url(img/w.png)")
    document.querySelector("#gz44").setAttribute("name", "w")
    document.querySelector("#gz55").setAttribute("style", "background:url(img/w.png)")
    document.querySelector("#gz55").setAttribute("name", "w")
    document.querySelector("#gz45").setAttribute("style", "background:url(img/b.png)")
    document.querySelector("#gz45").setAttribute("name", "b")
    document.querySelector("#gz54").setAttribute("style", "background:url(img/b.png)")
    document.querySelector("#gz54").setAttribute("name", "b")
    //判断哪些格子能落子，判断是否有行动力
    for (var y = 1; y <= 8; y++) {
        for (var x = 1; x <= 8; x++)
            rule_("w", x, y)
    }
}
init()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//行棋规则
var rule = function () {
    if (event.target.getAttribute("style") == "background:#3a5") {
        var nowGz = window[event.target.id]
        var x = nowGz.x
        var y = nowGz.y
        if (event.target.getAttribute("name") == "no") {
            if (window.w_or_b == 1) {
                rule_("w", "background:url(img/b.png)", "b", x, y)
            } else {
                rule_("b", "background:url(img/w.png)", "w", x, y)
            }
            //实时显示分数
            var w_count=document.querySelectorAll("[style='background:url(img/w.png)']").length
            var b_count=document.querySelectorAll("[style='background:url(img/b.png)']").length
            document.getElementById("w").innerHTML=`白子：${w_count}`
            document.getElementById("b").innerHTML=`黑子：${b_count}`

            window.hasAct = 0
            // 判断该局面下是否有行动力
            for (var y = 1; y <= 8; y++) {
                for (var x = 1; x <= 8; x++)
                    if (window.w_or_b == 1) {
                        rule_("b", x, y)
                    } else {
                        rule_("w", x, y)
                    }
            }

            if (window.hasAct) {
                window.w_or_b *= -1
            } else {
                //对面没有行动力，但是你也有行动力吗？判断一下
                for (var y = 1; y <= 8; y++) {
                    for (var x = 1; x <= 8; x++)
                        if (window.w_or_b) {
                            rule_("w", x, y)
                        } else {
                            rule_("b", x, y)
                        }
                }
                if (!window.hasAct) {
                    setTimeout(()=>{
                        alert("双方都没有行动力，游戏结束")
                        if(w_count==b_count){
                            document.getElementById("s_f").innerHTML=`平局`
                        }else if(w_count>b_count){
                            document.getElementById("s_f").innerHTML=`白胜`
                        }else{
                            document.getElementById("s_f").innerHTML=`黑胜`
                        }
                    },100)
                   
                } else {
                    setTimeout(()=>{
                        alert("对手没有行动力，请您继续行棋")
                    },100)
                }
            }
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//重新开始
var restart=function(){
    history.go(0)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//没有写的功能：悔棋
var back=function(){
    alert(`落子无悔真君子！（其实是作者太懒了，没有写这个功能^_^）`)
}