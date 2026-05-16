[洛谷CF2210B](https://www.luogu.com.cn/problem/CF2210B) || [CodeForces 2210 B](https://codeforces.com/contest/2210/problem/B)

### 简要题意
有 $n$ 张椅子排成一排，编号从 $1$ 到 $n$，并给出一个长度为 $n$ 的排列 $p$，按顺序遍历排列这排椅子，在每个椅子前有两种选择：坐下或跳过，若选择坐下则将编号为 $p_i$ 的椅子标记。当经过一张椅子且该椅子已被标记则结束遍历。请最大化坐下的椅子数量。

### 思路

考虑贪心。

如果坐下一张椅子，标记的椅子并不在这张椅子的后面，即 $p_i\le i$，这当然是好的，不会影响我们在哪里结束。所以我们尽量坐多一点满足上述条件的椅子，不难发现不管序列如何一定能把所有 $p_i\le i$ 的椅子坐完（读者可以尝试自证），因此答案就是序列中所有满足 $p_i\le i$ 的数。

[评测记录](https://codeforces.com/contest/2210/submission/369865363)

```cpp
#include <bits/stdc++.h>
using namespace std;
int t, n, x;
int main()
{
    cin >> t;
    while (t--)
    {
        cin >> n;
        int cnt = 0;
        for (int i = 1; i <= n; i++)
        {
            cin >> x;
            if (x <= i) cnt++;
        }
        cout << cnt << endl;
    }
}
```