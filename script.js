var arrbar=[];

function generateArray() {
  document.getElementById("bar").innerHTML = ""; // clear old bars
  arrbar=[];
  for (let i = 0; i < 25; i++) {
    var value = Math.floor(Math.random() * 400) + 1; // random height
    var bar = document.createElement("div");
    bar.classList.add("baritem");
    bar.style.height = value +"px";
    bar.style.width=15+"px";
    document.getElementById("bar").appendChild(bar); 
    arrbar.push(value);
  }
}
document.getElementById("btn").addEventListener("click", function() {
  generateArray();
});
  window.addEventListener("load", function(){generateArray()});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(arrbar){
  var bars=document.querySelectorAll(".baritem");
  var n = arrbar.length;
  for(i=0;i<n-1;i++){
    for(j=0;j<n-i-1;j++){
       bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      await sleep(100);
      if(arrbar[j+1]<arrbar[j]){
        var temp=arrbar[j+1];
        arrbar[j+1]=arrbar[j];
        arrbar[j]=temp;
        bars[j].style.height = arrbar[j] + "px";
        bars[j + 1].style.height = arrbar[j + 1] + "px";

      }
     bars[j].style.backgroundColor = "#00adb5";
      bars[j + 1].style.backgroundColor = "#00adb5";

    }
    bars[n - i - 1].style.backgroundColor = "limegreen";

  }
 bars[0].style.backgroundColor = "limegreen";

  
}  
document.getElementById("bubble").addEventListener("click",function(){
  bubbleSort(arrbar);
});


async function selectionSort(arrbar) {
  const bars = document.querySelectorAll(".baritem");
  const n = arrbar.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    bars[minIndex].style.backgroundColor = "blue"; 

    for (let j = i + 1; j < n; j++) {
      bars[j].style.backgroundColor = "red"; 

      await sleep(100);

      if (arrbar[j] < arrbar[minIndex]) {
        bars[minIndex].style.backgroundColor = "#00adb5";
        minIndex = j;
        bars[minIndex].style.backgroundColor = "blue"; 
      } else {
        bars[j].style.backgroundColor = "#00adb5"; 
      }
    }

    if (minIndex !== i) {
      // Swap values
      [arrbar[i], arrbar[minIndex]] = [arrbar[minIndex], arrbar[i]];

      // Swap heights
      bars[i].style.height = arrbar[i] + "px";
      bars[minIndex].style.height = arrbar[minIndex] + "px";
    }

    bars[minIndex].style.backgroundColor = "#00adb5"; 
    bars[i].style.backgroundColor = "limegreen"; 
  }

  bars[n - 1].style.backgroundColor = "limegreen"; 
}
document.getElementById("selection").addEventListener("click", function () {
  selectionSort(arrbar);
});



async function insertionSort(arrbar) {
  const bars = document.querySelectorAll(".baritem");
  const n = arrbar.length;

  for (let i = 1; i < n; i++) {
    let key = arrbar[i];
    let j = i - 1;

    bars[i].style.backgroundColor = "blue"; 

    await sleep(100);

    while (j >= 0 && arrbar[j] > key) {
      bars[j].style.backgroundColor = "red"; 

      arrbar[j + 1] = arrbar[j];
      bars[j + 1].style.height = arrbar[j + 1] + "px";

      await sleep(100);

      bars[j].style.backgroundColor = "#00adb5"; 
      j--;
    }

    arrbar[j + 1] = key;
    bars[j + 1].style.height = key + "px";

    bars[i].style.backgroundColor = "#00adb5"; 
  }
  for (let i = 0; i < n; i++) {
    bars[i].style.backgroundColor = "limegreen";
    await sleep(10);
  }
}
document.getElementById("insertion").addEventListener("click", function () {
  insertionSort(arrbar);
});


async function quickSort(arrbar) {
  var bars = document.querySelectorAll(".baritem");
  var n = arrbar.length;

  async function partition(low, high) {
    var pivot = arrbar[high];
    bars[high].style.backgroundColor = "blue";

    var i = low - 1;

    for (var j = low; j < high; j++) {
      bars[j].style.backgroundColor = "red";

      await sleep(100);

      if (arrbar[j] <= pivot) {
        i++;

        if (i !== j) {
          var temp = arrbar[i];
          arrbar[i] = arrbar[j];
          arrbar[j] = temp;

          bars[i].style.height = arrbar[i] + "px";
          bars[j].style.height = arrbar[j] + "px";

          await sleep(100);
        }
      }

      bars[j].style.backgroundColor = "#00adb5";
    }

    var temp = arrbar[i + 1];
    arrbar[i + 1] = arrbar[high];
    arrbar[high] = temp;

    bars[i + 1].style.height = arrbar[i + 1] + "px";
    bars[high].style.height = arrbar[high] + "px";

    bars[i + 1].style.backgroundColor = "limegreen";
    bars[high].style.backgroundColor = "#00adb5";

    await sleep(100);

    return i + 1;
  }

  async function sort(low, high) {
    if (low >= high) {
      if (low === high) {
        bars[low].style.backgroundColor = "limegreen";
      }
      return;
    }

    var pivotIndex = await partition(low, high);

    await sort(low, pivotIndex - 1);
    await sort(pivotIndex + 1, high);
  }

  await sort(0, n - 1);

  for (var i = 0; i < n; i++) {
    bars[i].style.backgroundColor = "limegreen";
  }
}

document.getElementById("quick").addEventListener("click", function () {
  quickSort(arrbar);
});

async function mergeSort(arrbar) {
  var bars = document.querySelectorAll(".baritem");
  var n = arrbar.length;

  async function merge(left, mid, right) {
    var leftArr = arrbar.slice(left, mid + 1);
    var rightArr = arrbar.slice(mid + 1, right + 1);

    var i = 0;
    var j = 0;
    var k = left;

    while (i < leftArr.length && j < rightArr.length) {
      bars[k].style.backgroundColor = "red";

      await sleep(100);

      if (leftArr[i] <= rightArr[j]) {
        arrbar[k] = leftArr[i];
        i++;
      } else {
        arrbar[k] = rightArr[j];
        j++;
      }

      bars[k].style.height = arrbar[k] + "px";
      bars[k].style.backgroundColor = "#00adb5";

      k++;
    }

    while (i < leftArr.length) {
      arrbar[k] = leftArr[i];
      bars[k].style.height = arrbar[k] + "px";
      bars[k].style.backgroundColor = "#00adb5";

      i++;
      k++;

      await sleep(100);
    }

    while (j < rightArr.length) {
      arrbar[k] = rightArr[j];
      bars[k].style.height = arrbar[k] + "px";
      bars[k].style.backgroundColor = "#00adb5";

      j++;
      k++;

      await sleep(100);
    }
  }

  async function sort(left, right) {
    if (left >= right) {
      return;
    }

    var mid = Math.floor((left + right) / 2);

    await sort(left, mid);
    await sort(mid + 1, right);

    await merge(left, mid, right);
  }

  await sort(0, n - 1);

  for (var i = 0; i < n; i++) {
    bars[i].style.backgroundColor = "limegreen";
  }
}

document.getElementById("merge").addEventListener("click", function () {
  mergeSort(arrbar);
});
