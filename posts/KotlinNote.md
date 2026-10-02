---
title: Kotlin学习笔记

date: 2026-10-2

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

# 2.类与对象
## 2.1 函数
前面已经介绍了 `main` 函数，它是程序的入口。还有 `println` 等方法也是一个函数。

创建自定义函数同样使用 `fun` 关键字。

```kotlin
fun function():Unit {
    println("Vue太难了，我还是去干后端吧")
}
```

函数名后面的 `:Unit` 提示编译器这是一个空类型返回值的函数，这个 `Unit` 类似于 `Java` 中的 `void`，表示空类型，或者无返回值。

当然，函数可以往里面传参。

```kotlin
fun speak(message:String){
    println("I say $message")
}
```

注意在 `Kotlin` 中，如果函数定义了传参，则调用时必须传实参。

```kotlin
fun main(){
    speak("What's your mission in Shanghai!")
    val str:String = "美国佬还是没有开口吗？"
    speak(str)
}
```

我们可以使用 `return` 关键字传递函数返回值。

```kotlin
fun sum(a:Int,b:Int):Int{
    return a+b
}
```

与其他语言相同，执行 `return` 语句后函数体会直接结束。

当然，我们可以设置参数的默认值。

```kotlin
fun test(text:String = "DefalutValue")
{
    println(text)
}
```
而对于多个参数的函数，我们可以指定传参，当没有指定时，编译器会默认从左到右赋参。

```kotlin
fun main() {
    test(b = 3)  //这里如果只想填写第二个参数b，我们可以直接指定吧实参给到哪一个形参
  	test(3)   //这种情况就是只填入第一个实参
}

fun test(a: Int = 6, b: Int = 10): Int {
    return a + b
}
```

不同于其他语言，`Kotlin` 中你可以在函数中编写新函数。

```kotlin
fun outer(){
    fun inner(){
        //这玩意几个语言有啊
    }
}
```

当然函数有作用域限制，内层函数的东西无法在外层使用。也就是说，上面的 `inner()` 函数只能在 `outer()` 中使用。内部的函数也可以使用外部的变量，但内部的变量无法直接被外部调用。

需要注意的是，尽管我们不能编写同名函数，但如果多个同名函数的参数不一致，是允许的。

```kotlin
fun test() = println("A")
fun test(str: String) = println("B")  //参数列表不一致
```

调用的时候，编译器会自动匹配使用的函数。

而如果仅仅是返回值类型不同，是不允许的。

$Look~Familiar?$ 这正是函数的**重载**。

## 2.2 变量的高级玩法

与 `C` 语言类似，变量也可以写在 `main` 等函数的外部，我们称之为全局变量，可以被所有函数调用。相应的，在函数内部定义的变量叫做局部变量。

前面介绍的变量定义不是完整的，事实上，官方给出的变量声明语法如下：

```kotlin
var <propertyName>[: <PropertyType>] [= <property_initializer>]
    [<getter>]
    [<setter>]
```

多出了两个东西：`getter` 和 `setter`。眼熟吗？和 `JS` 类似，它们本质上就是 `get` 和 `set` 函数。

* `getter` 用于获取这个变量的值，默认情况下直接返回当前这个变量的值
* `setter` 用于修改这个变量的值，默认情况下直接对这个变量的值进行修改

程序本质上就是通过这两个函数进行变量的调用和修改。

当然，我们可以对这两个函数进行修改。

```kotlin
var str:String = "kskbl"
get() = field+field
```

> 这里使用的field准确的说应该是Kotlin提供的"后备字段"，因为我们使用getter和setter本质上替代了原有的获取和修改方式，使其变得更像是函数的调用，因此，为了能够继续像之前使用一个变量那样去操作它本身，就有了这个后备字段。

当然也不是只能写成一行，你也可以这样写。

```kotlin
var str:String = "kskbl"
    get() {
        println("get the value of str:")
        return field + ", zdjd?"
    }
    set(value) { //value即为给过来的值
        println("set the value of str")
        field = value //当然val常量没有set钩子
    } 
fun main() = println(str)
```

因此你可能还会在别人的代码里面见到这样的写法：

```kotlin
val str get() = "kskbl?"
```

## 2.3 递归函数

显然，`Kotlin` 中可以在函数中调用自己（`main` 函数除外），因此递归的性质可以用来解决很多问题。

当然打过 `OI` 的都知道，递归是一种时间复杂度极高的方法（指数级啊兄弟，稍微 $n>20$ 就要炸了），因此我们可以使用 `tailrec` 关键字：

```kotlin
tailrec fun test(n: Int, sum: Int = 0): Int {
    if(n <= 0) return sum   //到底时返回累加的结果
    return test(n - 1, sum + n)  //不断累加
}
```

实际编译的时候等价于如下形式：

```java
public static final int test(int n,int prev) {
    while (n > 0) {
        int var2 = n-1;
        n = var2;
        prev = prev;
    }
    return 0;
}
```

## 2.4 库函数

前面我们见到的 `println` 和 `print` 就是内置的库函数。

而如果我们想实现读取，则使用 `readln` 和 `read`。

```kotlin
fun main() {
    val text = readln()
    println("Your input：$text")
}
```

当然标准库里面东西太少了，当我们想导入其他的库的时候，可以使用 `import` 关键字：

```kotlin
import kotlin.math.* //数学运算工具库
fun main() {
    1.0.pow(4.0) //.pow()方法可以实现幂运算
    abs(-1) //绝对值
    max(10,20) //较大值
    min(10,20) //较小值
    sqrt(4.0) //平方根
    sin(PI/2) //π/2的正弦值，其中PI是库中预设好的值
    cos(PI)
    tan(PI/4)
    asin(1.0) //三角函数反函数同理
    acos(1.0)
    atan(0.0)
    ln(E) //对数函数同样存在，E就是预设好的自然常数e
    log10(100.0) // lg运算
    log2(8.0) //log2运算
    //内置的就这几个，对于其他底数的对数运算，请使用换底公式（高中数学必修一）
    ceil(4.5) //向上取整
    floor(3.5) //向下取整
}
```

某些时候计算出来的浮点数可能会很奇怪，这是运算过程中的精度问题。

更多的库我们后面再讲。

## 2.5 （难点）高阶函数和 lambda 表达式

`Kotlin` 非常神奇，作为一种静态类型的编程语言，它使用了一系列函数类型来表示函数，并提供了一套特殊的语言结构，例如 **lambda 表达式**。

`Kotlin` 中的函数特别神奇，你是指可以将它存储在变量中，并作为参数传给其他高阶函数，并从中获取返回值，就像普通变量一样。

那什么是高阶函数？简单来说，如果一个函数接受另一个函数作为参数，或者返回值类型就是一个函数，我们就称之为一个高阶函数。

要声明函数类型，则需要按照以下规则。

> 所有的函数类型都要有一个括号，并在括号中填写参数类型列表和一个返回类型，如 `(A,B) -> C` 就是一个合法的函数类型，该类型表示接受类型 `A` 和 `B` 的两个参数并返回类型为 `C` 的值的函数。
> 
> 类似于之前函数的定义，你可以不填参数，但返回值必须填，即使你的返回值类型是 `Unit`。

```kotlin
var func0: (Int) -> Unit
var func1: (Double, Double) -> String
fun test(other: (Int) -> String) {
    println(other(1)) //对于函数类型的变量，我们同样可以像普通变量一样调用它
}
var func2:(Int)->((String)->Double) //当然你还可以套娃
```

套娃套太多会影响观感，因此我们可以使用自定义类型 `typealias` 关键字。

```kotlin
typealias stod = (String) -> Double
fun main() {
    var func:stod
}
```

如果我们想把函数传入，则按照如下方式：

```kotlin
fun main()
{
    var func:(String)->Int=::test //用双冒号引用一个现成的函数
}
fun test(str:String):Int { //注意要与上面变量表示的函数类型一致
    return "没胖我真比以前瘦了"
}
```

类似于 `JS` 中的箭头函数，我们也可以采取匿名函数的形式直接将函数写进去：

```kotlin
fun main()
{
    var func:(String)->Int = fun(str:String):Int {
        println("INPUT $str")
        return "kskbl"
    }
}
```

看着也没有箭头函数简单啊……别急，我们还没说什么是 lambda 表达式呢，那我们直接把上面的东西换成 lambda 表达式。

```kotlin
fun main()
{
    var func:(String)->Int = {
        println("INPUT $it") //默认情况下，如果函数只有一个参数，我们可以直接用it调用
        "kskbl" //跟if表达式一样，默认最后一行为返回值
    }
}
```

一个花括号就搞定了，牛逼啊！那我们要穿多个参数呢？

```kotlin
fun main()
{
    var func:(String,String)->Int = { a,b-> //手动添加两个参数的形参名称以调用
        println("first${a},second${b}")
        "kskbl"
    }
    val func2:(String,String)->Unit = { _,b -> // 若不适用第一个参数，可以直接用下划线 _ 占位表示不使用
        println("second$b")
    }
    func("kskbl","zdjd")
}
```

对于高阶函数的调用，最直接的方法就是这样：

```kotlin
fun main() {
    val func:(Int)->String={"收到参数$it"}
    test(func)
}
fun test(func:(Int)->String){
    println(func(66))
}
```

当然你也可以直接传 lambda 表达式。

```kotlin
fun main() {
    test({"收到参数$it"})
}
```

还能再简洁吗？能！在 `Kotlin` 中，如果函数的最后一个形参为函数类型，则可以直接写在括号后面：

```kotlin
test(){"收到参数$it"}
```

由于小括号里面就没有参数了，所以连括号都可以不写了。

```kotlin
test{"收到参数$it"}
```

当然如果之前还有其他参数，就只能好好写成这样了：

```kotlin
fun main() {
    test(1) { "收到的参数为$it" }
}

//这里两个参数，前面还有一个int类型参数，但是同样的最后一个参数是函数类型
fun test(i: Int, func: (Int) -> String) {
    println(func(66))
}
```

这叫做**尾随 lambda 表达式**。

注意，在 lambda 表达式中没办法直接使用 `return`，如果需要使用 `return` 则需要用到我们之前学到的标签：

```kotlin
fun main() {
    val func: (Int) -> String = test@{
        //比如这里判断到it大于10就提前返回结果
        if(it > 10) return@test "我是提前返回的结果"
        println("我是正常情况")
        "收到的参数为$it"
    }
    test(func)
}

fun test(func: (Int) -> String) {
    println(func(66))
}
```

而如果我们用了尾随 lambda 表达式，则默认的标签名字就是函数名：

```kotlin
fun main() {
    testName {  //默认使用函数名称
        if(it > 10) return@testName "我是提前返回的结果"
        println("我是正常情况")
        "收到的参数为$it"
    }
}

fun testName(func: (Int) -> String) {
    println(func(66))
}
```

$$\Large 未完待续$$
