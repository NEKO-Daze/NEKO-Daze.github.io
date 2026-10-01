---
title: Kotlin学习笔记

date: 2026-10-1

tags: [Kotlin,Note]
---
一只懒猫猫的Kotlin学习笔记

---

$$\Large Kotlin$$

# 1.基础语法

## 1.1基础框架与打印
`Kotlin` 的代码会首先执行名为 `main` 的函数，这与 `C` 语言类似。

```kotlin
fun main() {
    println("Hello Kotlin!")
}
```

其中 `fun` 关键字用来定义函数，`main` 为函数名，`println` 方法可以将参数打印在一行里（ printline 的缩写）。

注意 `Kotlin` 与其他很多语言类似，会严格区分大小写。

在 `Kotlin` 中，一行的结尾判定与 `Python` 类似，空格会自动忽略，如果想一行内写多个语句则需用 `;` 分号分离。

```kotlin
fun main() {
    println("First Line");println("Second Line") //;分隔多个语句
    println         (
        "There are many spaces"
    )//空格自动忽略
}
```

## 1.2注释

`Kotlin` 中的注释与 `C` 类似。

```kotlin
//单行注释
/*
多行注释
多行注释
多行注释
 */
```

## 1.3变量、常量、基本类型

`Kotlin` 中的变量、常量声明与很多语言类似，使用 `var` 和 `val` 关键字声明。

```kotlin
fun main() {
    var a:Int = 114514
    var b = 1919810
    var c = "This is a String"
    val d = "Value can not be changed"
}
```

不难看出声明变量和常量的格式为 `var/val [name]:[type] = [defaultValue]`。

变量名、函数名的命名与很多语言类似，且遵循以下规范：

* 可以由大小写字母、数字、下划线（_) 和美元符号 ($)组成，数字不能作为开头字符。
* 不能重复定义，但区分大小写。
* 不能使用空格、@、#、+、-、/等符号。
* 不可以用 `true` 、 `false` 、 `fun` 等 `Kotlin` 关键字和基本数据类型名作为名字。

我们一般遵循小驼峰习惯命名变量名，大驼峰习惯命名函数名，且一般使用英文单词命名（别用拼音）。

当你给予了变量和常量初始值的时候，`Kotlin` 会自动推断类型，这个时候我们可以省略类型声明。

变量和常量可以作为参数传入方法，当然，常量无法被修改。

注意 `Kotlin` 中的类型名称首字母要大写。常用的基本数据类型有：

* 数值类：`Byte`（$[-128,127]$）、`Short`（$[-2^{16},2^{16}-1]$）、`Int`（$[-2^{32},2^{32}-1]$）、`Long`（$[-2^{64},2^{64}-1]$）；
* 浮点类：`Float`、`Double`（`Float`一般会精度损失，常用`Double`）。
* 字符类：`Char`
* 布尔类：`Boolean`
* 字符串：`String`
* 数组类： `Array`、`IntArray`、`ByteArray`等

> 无符号类型则在原类型前加大写字母 U，如 `UInt`、`ULong`。

声明 `Long` 类型数据时，可以用 `L` 字符提醒编译器该数据为 `Long` 类型，如 `var a = 1L`。

类似于 `C`，`Int` 类型也可以在符合其他类型范围时自动转换，如将 ASCII 码值赋给 `Char` 类型、将数字赋给 `Boolean` 类型等。

数字过长的时候，可以用 `_` 以三位数字为间隔分隔，`Kotlin` 会自动识别，如 `val a = 1_000_000_000` 是合法的。

数值赋值不仅可以用十进制，也可以用十六进制或二进制赋值（不支持八进制），如 `val a = 0xAF`、`val b = 0b1001`，其中 `0x` 为十六进制前缀，`0b` 为二进制前缀。

当赋值浮点数的时候，只有当出现小数点的时候，编译器才会推断该值为浮点数，具体情况如下：

```kotlin
fun main() {
    val pi = 3.1415926 //这样写合法，kotlin会自动将其默认推断为Double类型
    val a = 3 //这样写合法，kotlin自动将其默认推断为Int类型
    val b = 3.0 //这样写合法，kotlin自动将其默认推断为Double类型
    val c:Double = 1 //这样写不合法，应为你相当于是在将Int类型数据赋值给Double
    val d:Double = 1.0 //这样写才合法
}
```

注意不同于其他语言，`Kotlin` 中没有浮点数与整数间的隐式转换（上面的例子中也可以体现）。也就是说，`Int` 和 `Double` 类型之间不能相互赋值。

变量的赋值、数学操作与 `C` 类似。

```kotlin
fun main()
{
    var a = 67
    a = a + 2
    a += 2
    a -= 4
    a *= 2
    a /= 2 //除法默认去余数，只保留商
    var b = a%2 //取余
    var c = a + b
    println(a,b,c)
    println(++a) //++运算与C语言类似
    println(a++)
    println(a)
}
```

> `Kotlin` 支持运算符重载，也就是说，你可以重新定义这些运算符。

运算的优先级与其他语言类似，不过多展开。

位运算操作如下：

* 有符号左移：`shl(bits)`
* 有符号右移：`shr(bits)`
* 无符号右移：`ushr(bits)`
* 按位与：`and(bits)`
* 按位或：`or(bits)`
* 按位异或：`xor(bits)`
* 取反：`inv()`

对于 `Char` 类型，可以用 `.code` 来获取其ASCII码。

```kotlin
val c:Char = 'A'
println(c.code)//输出65
```

而对于不出现在ASCII的Unicode字符，我们可以用如下方法打出：

```kotlin
val c = '\u2713'//符号✓对应的Unicode编码为10003，这里需要转换为16进制表示，结果为0x2713
println(c)
```

类似于 `C` 语言，一些字符需要通过转义字符输出：

* `\t` 选项卡
* `\b` 退格
* `\n` 换行（LF）
* `\r` 回车（CR）
* `\'` 单引号
* `\"` 双引号
* `\\` 反斜杠
* `\$` 美元符号

字符串之间可以用 `+` 运算符进行拼接。

字符串类型可以用三个双引号表示一个原始字符串。

```kotlin
fun main() {
    val text = """
    这是第一行
    这第二行
    别\n了，没用
    真牛逼啊，这功能隔壁Java15才有
    """
    println(text)
}
```

而如果我们想让其他数据类型与字符串拼接，则可以使用**模版表达式**。

```kotlin
fun main() {
    val a = 10
    val text = "这是拼接的值$a"  //这里的$为模版表达式，可以直接将后面跟着的变量或表达式以字符串形式替换到这个位置
    println(text)
    text = "$a 这是拼接的值" //注意这里$a之后必须空格，否则会把后面的整个字符串认为这个变量的名字
    text = "${a}这是拼接的值"  //添加花括号就可以消除歧义了
    text = "${a > 0}这是拼接的值"  //花括号中也可以写成表达式
}
```

## 1.4表达式
表达式的返回值一般为 `Boolean` 类型。

大小判断如下：

```kotlin
fun main()
{
    var a = 10
    var b = 20
    println(a==b)//判断是否相等
    println(a<b)//小于
    println(a>b)//大于
    println(a>=b)//大于等于
    println(a<=b)//小于等于
    println(a!=b)//不等于
    println(a in 1..10)//a是否在[1,10]中
    println(a in 1..<10)//a是否在[1,10)中
    println(a !in 1..10)//a是否不在[1,10]中
}
```

对于 `Boolean` 值的逻辑操作与其他语言类似：

* 逻辑与：`&&`
* 逻辑或：`||`
* 逻辑取反：`!`

不过多赘述。

## 1.5选择结构

我们可以使用 `if-else if-else` 语句实现选择结构。

```kotlin
fun main() {
    val score = 2
    if (score >= 90) //90分以上才是优秀
        println("优秀") 
    else if (score >= 70) //当上一级if判断失败时，会继续判断这一级
        println("良好") 
    else if (score >= 60) 
        println("及格") 
    else  //当之前所有的if都判断失败时，才会进入到最后的else语句中
        println("不及格")
}
```

除此之外，类似于其他语言的三元运算，`Kotlin` 可以用表达式来实现类似于三元运算符的效果。

```kotlin
fun main() {
    val score = 2
    val res1 = if(10 > 3) "Yes" else "No"
    val res = if (score > 60) {
        println("不错啊期末没挂科")
        "Yes"   //代码块默认最后一行作为返回结果
    } else {
        println("不会有人Java期末还要挂科吧")
        "No"
    }
}
```

注意，如果需要这种返回结果的表达式，那么必须要存在 `else` 分支，否则不满足条件就没结果了。

类似于 `C` 语言的 `switch` 语句，`Kotlin` 中使用 `when` 语句来实现多分支结构。

```kotlin
fun main() {
    val c = 'A'
    when (c) {
        'A' -> println("去尖子班！准备冲刺985大学！")
        'B' -> println("去平行班！准备冲刺一本！")
        'C' -> println("去职高深造。")
    }
}
```

当然，`when` 同样可以作为表达式使用，这种时候必须存在 `else` 分支，除非编译器能推断出所有可能的情况都包含分支条件。

```kotlin
fun main() {
    val c = 'A'
    val numericValue = when (c) {
        'B' -> 0
        'A' -> 1
        else -> 2    //还有其他情况，这里必须添加else，不然其他情况岂不是没返回的东西？
    }
    val d = true
    val numericValue2 = when (d) {
        false -> 0
        true -> 1
        // 由于Boolean只具备真和假条件，这里的'else' 就不再强制要求
        // 这同样适用于比如枚举类等
    }
    val x = 1
    val res = when(x) {
        0, 1 -> print("0 or 1")
        else -> print("otherwise")
    }
}
```

> `print` 方法不同于 `println`，不会自动换行，连续使用 `print` 语句时输出内容会拼接在一起。

分支条件也可以是表达式。

```kotlin
fun main() {
    val score = 10
    val grade = when(score) {
      	//使用in判断目标变量值是否在指定范围内
        in 100..90 -> "优秀"
        in 89..80 -> "良好"
        in 79..70 -> "及格"
        in 69..60 -> "牛逼"
        else -> "不及格"
    }
}
```

## 1.5循环结构
我们可以使用 `for` 语句实现循环结构。

```kotlin
fun main() {
    for (i in 1..3)  //这里直接写入1..3表示1~3这个区间
        println("这是第 $i 行")
}
```

与 `C` 一样，这里的循环变量 `i` 为局部变量，`for` 循环外不可使用。

同样可以设置步长。

```kotlin
for (i in 1..10 step 2) {
    println(i)
}
```

如果需要倒序遍历，可以使用 `downTo`。

```kotlin
for (i in 10 downTo 1) println(i)
```

如果要实现循环跳过，可以使用 `continue` 和 `break`，作用与 `C` 相同，不再赘述。

我们知道，这两个关键字都是作用于离它最近的 `for` 循环，而如果我们想让其作用于外层循环，可以使用**标记**。

```kotlin
fun main() {
    outer@ for (i in 1..3) {   //在循环语句前，添加 标签@ 来进行标记
        inner@ for (j in 1..3) {
            if (i == j) break@outer  //break后紧跟要结束的循环标记，当i == j时终止外层循环
            println("$i, $j")
        }
    }
}
```

同样，在 `Kotlin` 中也有 `while` 和 `do while` 语句。

```kotlin
fun main()
{
    var i = 100
    while (i > 0) {
        println(i)
        i /= 2
    }
}
```

```kotlin
fun main() {
    var i = 0
    do {
        println(i)
        i++
    } while(i < 10)
}
```

$$--未完待续--$$
