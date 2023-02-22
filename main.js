
    let column_1=[6,5,6,10,1,4,8,2,3,8,6,4,1,4,7,5,2,7,3,7,10,6,10,9,3,10,10,4,2,10];
    let column_2=[5,8,10,9,5,9,6,3,4,6,9,4,2,6,6,7,6,1,6,5,6,10,2,8,10,6,2,9,3,5];
    let column_3=[53,91,82,72,41,69,75,81,55,74,59,47,100,97,46,83,95,85,78,61,49,86,54,100,90,47,74,49,48,63];
    let column_4=[78,70,87,96,86,84,66,59,41,54,79,61,87,93,92,84,89,98,73,77,64,89,72,56,59,75,50,46,46,99];
    sum1=0
    for(i=0;i<column_1.length;i++){
       sum1=sum1+column_1[i];
    }
    sum2=0
    for(i=0;i<column_2.length;i++){
        sum2=sum2+column_2[i];
     }
    sum3=0
    for(i=0;i<column_3.length;i++){
        sum3=sum3+column_3[i];
     }
    sum4=0
    for(i=0;i<column_4.length;i++){
        sum4=sum4+column_4[i];
     }
    sumTotal=0
    sumTotal=sum1+sum2+sum3+sum4;
    const results={
      column_1:[sum1],
      column_2:[sum2],
      column_3:[sum3],
      column_4:[sum4],
      total_score:[sumTotal],
    }
    console.log(results)
