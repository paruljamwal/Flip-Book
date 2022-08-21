const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");


prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
        case 3:
            paper3.classList.add("flipped");
            paper3.style.zIndex = 3;
            break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
                case 5:
                    paper5.classList.add("flipped");
                    paper5.style.zIndex = 5;
                    break;
      case 6:
        paper6.classList.add("flipped");
        paper6.style.zIndex = 6;
        closeBook(false);
        break;
      default:
        throw new Error("page not found");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 6;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 5;
        break;
        case 4:
            paper3.classList.remove("flipped");
            paper3.style.zIndex = 4;
            break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 3;
                break;
                case 6:
                    paper5.classList.remove("flipped");
                    paper5.style.zIndex = 2;
                    break;
      case 7:
        openBook();
        paper6.style.zIndex = 1;
        paper6.classList.remove("flipped");
        break;
      default:
        throw new Error("page not found");
    }

    currentLocation--;
  }
}
