function solution(numbers, hand) {
  let answer = DistinctionFinger(numbers, hand);
  return answer;
}

function DistinctionFinger(numbers, hand) {
  let HandArray = [];
  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case 1:
        HandArray.push("L");
        break;
      case 4:
        HandArray.push("L");
        break;
      case 7:
        HandArray.push("L");
        break;
      case 3:
        HandArray.push("R");
        break;
      case 6:
        HandArray.push("R");
        break;
      case 9:
        HandArray.push("R");
        break;
      case 2:
        let reversHand2 = [...HandArray];
        reversHand2 = reversHand2.reverse();
        let WinnerR2;
        let WinnerL2;
        let Rnum2;
        let Lnum2;
        for (let j = 0; j < reversHand2.length; j++) {
          if (reversHand2[j] == "R" && Rnum2 == undefined) {
            Rnum2 = numbers[reversHand2.length - j - 1];
          } else if (reversHand2[j] == "L" && Lnum2 == undefined) {
            Lnum2 = numbers[reversHand2.length - j - 1];
          }
        }
        switch (Rnum2) {
          case 1:
            WinnerR2 = 1;
            break;
          case 3:
            WinnerR2 = 1;
            break;
          case 5:
            WinnerR2 = 1;
            break;
          case 4:
            WinnerR2 = 2;
            break;
          case 6:
            WinnerR2 = 2;
            break;
          case 8:
            WinnerR2 = 2;
            break;
          case 7:
            WinnerR2 = 3;
            break;
          case 9:
            WinnerR2 = 3;
            break;
          case 0:
            WinnerR2 = 3;
            break;
        }
        switch (Lnum2) {
          case 1:
            WinnerL2 = 1;
            break;
          case 3:
            WinnerL2 = 1;
            break;
          case 5:
            WinnerL2 = 1;
            break;
          case 4:
            WinnerL2 = 2;
            break;
          case 6:
            WinnerL2 = 2;
            break;
          case 8:
            WinnerL2 = 2;
            break;
          case 7:
            WinnerL2 = 3;
            break;
          case 9:
            WinnerL2 = 3;
            break;
          case 0:
            WinnerL2 = 3;
            break;
        }

        if (WinnerL2 > WinnerR2) {
          HandArray.push("R");
        } else if (WinnerR2 > WinnerL2) {
          HandArray.push("L");
        } else {
          if (hand == "right") {
            HandArray.push("R");
          } else if (hand == "left") {
            HandArray.push("L");
          }
        }
        break;
      case 5:
        let reversHand5 = [...HandArray];
        reversHand5 = reversHand5.reverse();
        let WinnerR5;
        let WinnerL5;
        let Rnum5;
        let Lnum5;
        for (let j = 0; j < reversHand5.length; j++) {
          if (reversHand5[j] == "R" && Rnum5 == undefined) {
            Rnum5 = numbers[reversHand5.length - j - 1];
          } else if (reversHand5[j] == "L" && Lnum5 == undefined) {
            Lnum5 = numbers[reversHand5.length - j - 1];
          }
        }

        switch (Rnum5) {
          case 1:
            WinnerR5 = 2;
            break;
          case 2:
            WinnerR5 = 1;
            break;
          case 3:
            WinnerR5 = 2;
            break;
          case 4:
            WinnerR5 = 1;
            break;
          case 6:
            WinnerR5 = 1;
            break;
          case 8:
            WinnerR5 = 1;
            break;
          case 7:
            WinnerR5 = 2;
            break;
          case 9:
            WinnerR5 = 2;
            break;
          case 0:
            WinnerR5 = 2;
            break;
        }
        switch (Lnum5) {
          case 1:
            WinnerL5 = 2;
            break;
          case 2:
            WinnerL5 = 1;
            break;
          case 3:
            WinnerL5 = 2;
            break;
          case 4:
            WinnerL5 = 1;
            break;
          case 6:
            WinnerL5 = 1;
            break;
          case 8:
            WinnerL5 = 1;
            break;
          case 7:
            WinnerL5 = 2;
            break;
          case 9:
            WinnerL5 = 2;
            break;
          case 0:
            WinnerL5 = 2;
            break;
        }

        if (WinnerL5 > WinnerR5) {
          HandArray.push("R");
        } else if (WinnerR5 > WinnerL5) {
          HandArray.push("L");
        } else {
          if (hand == "right") {
            HandArray.push("R");
          } else if (hand == "left") {
            HandArray.push("L");
          }
        }
        break;
      case 8:
        let reversHand8 = [...HandArray];
        reversHand8 = reversHand8.reverse();
        let WinnerR8;
        let WinnerL8;
        let Rnum8;
        let Lnum8;
        for (let j = 0; j < reversHand8.length; j++) {
          if (reversHand8[j] == "R" && Rnum8 == undefined) {
            Rnum8 = numbers[reversHand8.length - j - 1];
          } else if (reversHand8[j] == "L" && Lnum8 == undefined) {
            Lnum8 = numbers[reversHand8.length - j - 1];
          }
        }

        switch (Rnum8) {
          case 1:
            WinnerR8 = 3;
            break;
          case 2:
            WinnerR8 = 2;
            break;
          case 3:
            WinnerR8 = 3;
            break;
          case 4:
            WinnerR8 = 2;
            break;
          case 5:
            WinnerR8 = 1;
            break;
          case 6:
            WinnerR8 = 2;
            break;
          case 7:
            WinnerR8 = 1;
            break;
          case 9:
            WinnerR8 = 1;
            break;
          case 0:
            WinnerR8 = 1;
            break;
        }
        switch (Lnum8) {
          case 1:
            WinnerL8 = 3;
            break;
          case 2:
            WinnerL8 = 2;
            break;
          case 3:
            WinnerL8 = 3;
            break;
          case 4:
            WinnerL8 = 2;
            break;
          case 5:
            WinnerL8 = 1;
            break;
          case 6:
            WinnerL8 = 2;
            break;
          case 7:
            WinnerL8 = 1;
            break;
          case 9:
            WinnerL8 = 1;
            break;
          case 0:
            WinnerL8 = 1;
            break;
        }
        if (WinnerL8 > WinnerR8) {
          HandArray.push("R");
        } else if (WinnerR8 > WinnerL8) {
          HandArray.push("L");
        } else {
          if (hand == "right") {
            HandArray.push("R");
          } else if (hand == "left") {
            HandArray.push("L");
          }
        }
        break;
      case 0:
        let reversHand0 = [...HandArray];
        reversHand0 = reversHand0.reverse();
        let WinnerR0;
        let WinnerL0;
        let Rnum0;
        let Lnum0;
        for (let j = 0; j < reversHand0.length; j++) {
          if (reversHand0[j] == "R" && Rnum0 == undefined) {
            Rnum0 = numbers[reversHand0.length - j - 1];
          } else if (reversHand0[j] == "L" && Lnum0 == undefined) {
            Lnum0 = numbers[reversHand0.length - j - 1];
          }
        }

        switch (Rnum0) {
          case 1:
            WinnerR0 = 4;
            break;
          case 2:
            WinnerR0 = 3;
            break;
          case 3:
            WinnerR0 = 4;
            break;
          case 4:
            WinnerR0 = 3;
            break;
          case 5:
            WinnerR0 = 2;
            break;
          case 6:
            WinnerR0 = 3;
            break;
          case 7:
            WinnerR0 = 2;
            break;
          case 8:
            WinnerR0 = 1;
            break;
          case 9:
            WinnerR0 = 2;
            break;
        }
        switch (Lnum0) {
          case 1:
            WinnerL0 = 4;
            break;
          case 2:
            WinnerL0 = 3;
            break;
          case 3:
            WinnerL0 = 4;
            break;
          case 4:
            WinnerL0 = 3;
            break;
          case 5:
            WinnerL0 = 2;
            break;
          case 6:
            WinnerL0 = 3;
            break;
          case 7:
            WinnerL0 = 2;
            break;
          case 8:
            WinnerL0 = 1;
            break;
          case 9:
            WinnerL0 = 2;
            break;
        }
        if (WinnerL0 > WinnerR0) {
          HandArray.push("R");
        } else if (WinnerR0 > WinnerL0) {
          HandArray.push("L");
        } else {
          if (hand == "right") {
            HandArray.push("R");
          } else if (hand == "left") {
            HandArray.push("L");
          }
        }
        break;
    }
  }

  return HandArray.join("");
}
