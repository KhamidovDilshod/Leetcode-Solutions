class Solution {
    public int romanToInt(String s) {
        
        var chars = new ArrayList<>(Arrays.asList(s.split("")));
        var ints = new ArrayList<Integer>();


        for (String aChar : chars) {
            switch (aChar) {
                case "M":
                    ints.add(1000);
                    break;
                case "D":
                    ints.add(500);
                    break;
                case "C":
                    ints.add(100);
                    break;
                case "L":
                    ints.add(50);
                    break;
                case "X":
                    ints.add(10);
                    break;
                case "V":
                    ints.add(5);
                    break;
                case "I":
                    ints.add(1);
                    break;
                default:break;
            }
        }

    
        for (int i = 0; i < ints.size()-1; i++) {
            if (ints.get(i)<ints.get(i+1)) {
               var diff = ints.get(i+1)-ints.get(i);
                ints.set(i+1, diff);
                ints.remove(i);
            }
        }
        
      return ints.stream().mapToInt(Integer::intValue).sum();
    }
}
//03/30/2022 09:46	Accepted	37 ms	52.5 MB	java
/*
@Author Sharofiddin Jo'rayev
*/ 