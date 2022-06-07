solution("...!@BaT#*..y.abcdefghijklm");

function solution(new_id) {
  let answer = new_id;
  answer = OneStage(answer);
  answer = TwoStage(answer);
  answer = ThreeStage(answer);
  answer = FourStage(answer);
  answer = FiveStage(answer);
  answer = SixStage(answer);
  answer = FourStage(answer);
  answer = SevenStage(answer);
  console.log(answer);

  return answer;
}

function OneStage(id) {
  return id.toLocaleLowerCase();
}

function TwoStage(id) {
  return id.replace(/[^0-9|.|_|a-z|-]/g, "");
}

function ThreeStage(id) {
  return id.replace(/\.+/g, ".");
}

function FourStage(id) {
  return id.replace(/^\.|\.$/g, "");
}

function FiveStage(id) {
  return id.replace(/^$/, "a");
}

function SixStage(id) {
  return id.slice(0, 15).replace(/\.$/, "");
}

function SevenStage(id) {
  let idL = id.length;
  if (idL < 3) {
    if (idL == 2) {
      return `${id}${id[idL - 1]}`;
    }
    return id + id + id;
  }
  return id;
}
