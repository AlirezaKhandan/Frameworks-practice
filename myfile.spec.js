import { describe } from "yargs";
import { sum } from "./myfile";
import { beforeEach } from "node:test";
import message from "./myfixture.json";


describe("sum", () => {
    beforeEach(() => {
        console.log("beforeEach");
    });
    test ("1 + 2 to get 3", () => {
        expect(sum(1, 2)).toBe(3); 
    });
    
    test ("1 + 2 to dont get 5", () => {
        expect(sum(1, 2)).not.ToBe(5); 
    });
});


