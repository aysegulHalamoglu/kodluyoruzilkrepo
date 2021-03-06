# Projects

[Project1](#project1)
[Project2](#project2)
[Project3](#project3)

<h2 id='project1'>Project 1</h2>

[22,27,16,2,18,6] ???? Selection Sort

##### 1.Yukar覺da verilen dizinin selection sort t羹r羹ne g繹re a??amalar覺n覺 yaz覺n覺z. / Write the steps of the given array above according to the selection sort .  

*Dizideki en k羹癟羹k eleman覺 bul en ba??a yerle??tir  / Find the minimum element in array and place it at beginning of the array.*

- [22,27,16,**2**,18,6] n
- [2,27,16,22,18,**6**] n-1
- [2,6,**16**,22,18,27] n-2
- [2,6,16,22,**18**,27] n-3
- [2,6,16,18,**22**,27] n-4
- [2,6,16,18,22,**27**] 1


##### 2. Big-O g繹sterimini yaz覺n覺z. / Write Big-O notation.  

Big-O notation : n+(n-1)+(n-2)+...+1  : n.(n+1)/2  : O(n<sup>2</sup>) 

##### 3. Time Complexity: 

![](https://big-o.io/assets/selection-sort.png)

- **Average case:**  16 and 18  
 *Arad覺??覺m覺z say覺n覺n ortada olmas覺 / the number we are looking for is in the middle* 
 - **Worst case:**  27
 *Arad覺??覺m覺z say覺n覺n sonda olmas覺 / the number we are looking for is in the end* 
 - **Best case:**  2
 *Arad覺??覺m覺z say覺n覺n dizinin en ba??覺nda olmas覺/ the number we are looking for is in the beginning of the array* 

##### 4. Dizi s覺raland覺ktan sonra 18 say覺s覺 hangi case kapsam覺na girer? / What case does the number 18 take part after array was sorted?

Yukarda g繹r羹ld羹??羹 gibi 18 say覺s覺 Avarage case kapsam覺na girer. / As you see above the number 18 takes part in Average case. 

##### 5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a g繹re ilk 4 ad覺m覺n覺 yaz覺n覺z. /  Write the first 4 steps of the given array according to the selection sort.

- [7,3,5,8,**2**,9,4,15,6]
- [2,**3**,5,8,7,9,4,15,6] 
- [2,3,5,8,7,9,**4**,15,6] 
- [2,3,4,8,7,9,**5**,15,6] 


<h2 id='project2'>Project 2</h2>

[16,21,11,8,12,22] ???? Merge Sort

##### 1.Yukar覺da verilen dizinin merge sort t羹r羹ne g繹re a??amalar覺n覺 yaz覺n覺z. / Write the steps of the given array above according to the merge sort .  

```
          [16, 21, 11, 8, 12, 22]
               /            \ 
      [16, 21, 11]         [8, 12, 22]
        /     \             /       \ 
     [16]   [21,11]      [8, 12]    [22]
       |     /    \       /   \       |  
     [16]  [21]  [11]   [8]  [12]   [22]
       |     \     /      \    /      | 
     [16]   [11, 21]     [8, 12]    [22]
        \       |           \       /                 
         [11, 16, 21]      [8, 12, 22]
              \                /
             [8, 11, 12, 16, 21, 22]

```

##### 2. Big-O g繹sterimini yaz覺n覺z. / Write Big-O notation. 

Big-O notation : (2<sup>x</sup>=n) * n  : O(n.logn) 



<h2 id='project3'>Project 3</h2>

[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] ???? Binary-Search-Tree

##### Yukar覺da verilen dizinin Binary-Search-Tree a??amalar覺n覺 yaz覺n覺z. / Write the steps of the given array above according to the Binary-Search-Tree.  

??rnek: root x'dir. root'un sa??覺ndan y bulunur. Solunda z bulunur vb.
Ex: x is root. y takes part in the right of the root and z takes part in the left etc.

- 7 is root. 
- 5 takes part in left and 1 takes part in left of 5
- 8 takes part in right and 9 takes part in right of 8
...

```
          7
        /   \ 
       5     8
      / \      \ 
     1    6     9
    / \  
   0   3
      / \ 
     2   4

```