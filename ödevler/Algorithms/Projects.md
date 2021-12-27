# Projects

[Project1](#project1)
[Project2](#project2)
[Project3](#project3)

<h2 id='project1'>Project 1</h2>

[22,27,16,2,18,6] 🡆 Selection Sort

##### 1.Yukarıda verilen dizinin selection sort türüne göre aşamalarını yazınız. / Write the steps of the given array above according to the selection sort .  

*Dizideki en küçük elemanı bul en başa yerleştir  / Find the minimum element in array and place it at beginning of the array.*

- [22,27,16,**2**,18,6] n
- [2,27,16,22,18,**6**] n-1
- [2,6,**16**,22,18,27] n-2
- [2,6,16,22,**18**,27] n-3
- [2,6,16,18,**22**,27] n-4
- [2,6,16,18,22,**27**] 1


##### 2. Big-O gösterimini yazınız. / Write Big-O notation.  

Big-O notation : n+(n-1)+(n-2)+...+1  : n.(n+1)/2  : O(n<sup>2</sup>) 

##### 3. Time Complexity: 

![](https://big-o.io/assets/selection-sort.png)

- **Average case:**  16 and 18  
 *Aradığımız sayının ortada olması / the number we are looking for is in the middle* 
 - **Worst case:**  27
 *Aradığımız sayının sonda olması / the number we are looking for is in the end* 
 - **Best case:**  2
 *Aradığımız sayının dizinin en başında olması/ the number we are looking for is in the beginning of the array* 

##### 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? / What case does the number 18 take part after array was sorted?

Yukarda görüldüğü gibi 18 sayısı Avarage case kapsamına girer. / As you see above the number 18 takes part in Average case. 

##### 5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız. /  Write the first 4 steps of the given array according to the selection sort.

- [7,3,5,8,**2**,9,4,15,6]
- [2,**3**,5,8,7,9,4,15,6] 
- [2,3,5,8,7,9,**4**,15,6] 
- [2,3,4,8,7,9,**5**,15,6] 


<h2 id='project2'>Project 2</h2>

[16,21,11,8,12,22] 🡆 Merge Sort

##### 1.Yukarıda verilen dizinin merge sort türüne göre aşamalarını yazınız. / Write the steps of the given array above according to the merge sort .  

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

##### 2. Big-O gösterimini yazınız. / Write Big-O notation. 

Big-O notation : (2<sup>x</sup>=n) * n  : O(n.logn) 



<h2 id='project3'>Project 3</h2>

[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] 🡆 Binary-Search-Tree

##### Yukarıda verilen dizinin Binary-Search-Tree aşamalarını yazınız. / Write the steps of the given array above according to the Binary-Search-Tree.  

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.
Ex: x is root. y takes part in the right of the root and z takes part in the left etc.

- 7 is root. 
- 5 takes part in left and 1 takes part in left of 5
- 8 takes part in right and 1 takes part in left of 5
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