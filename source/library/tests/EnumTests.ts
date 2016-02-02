
import chai = require("chai");

import { EnumClass } from "../src/Common/Enum";

export function loadTests() {

  class TestClass {
    public static PropS = 27;
    public static PropA = "A";
  }

  class TestClassWithDuplicates {
    public static PropK = "A";
    public static PropL = "A";
  }

  var classEnum = new EnumClass(TestClass);

  // FYI - TypeScript thinks Keys.PropS is a number,
  //    so you may need to cast it at times (i.e. <any>Enum.Keys.PropS)
  // console.log(classEnum.Class.PropS);              // 27
  // console.log(classEnum.Class.PropA);              // "A"
  // console.log(classEnum.KeysByProperty.PropS);     // "PropS"
  // console.log(classEnum.KeysByValue["A"]);         // "PropA"

  var tst = classEnum.KeysByProperty["PropS"];

  describe('EnumClass', function() {
    var classEnum: EnumClass<typeof TestClass>;

    before(() => {
      classEnum = new EnumClass(TestClass);
    });

    describe('Initialization', function() {
      it("should instantiate when given a class definition", function() {
        chai.should().exist(classEnum);
      });
      it("should fail to instantiate when given duplicate values", function() {
        chai.expect(function() {
          var shouldFailClass = new EnumClass(TestClassWithDuplicates);
        }).to.throw();
      });
    });

    describe('Enum Values', function() {
      it("should return requested property value", function() {
        chai.expect(classEnum.Class.PropS).to.equal(27);
        chai.expect(classEnum.Class.PropA).to.equal("A");
      });
      it("should return requested property key name", function() {
        chai.expect(classEnum.KeysByProperty.PropA).to.equal("PropA");
        chai.expect(classEnum.KeysByProperty.PropS).to.equal("PropS");
      });
      it("should lookup a key when given a value", function() {
        chai.expect(classEnum.KeysByValue["A"]).to.equal("PropA");
        chai.expect(classEnum.KeysByValue[27]).to.equal("PropS");
      });
      it("should contain an array consisting of all keys", function() {
        chai.expect(classEnum.AllKeys.length).to.equal(2);
        chai.expect(classEnum.AllKeys[0] + classEnum.AllKeys[1]).to.contain("PropS");
        chai.expect(classEnum.AllKeys[0] + classEnum.AllKeys[1]).to.contain("PropA");
      });
      it("iterator should return all expected values", function() {
        var items = 0;
        var self = this;
        classEnum.forEach(function(val, key, typ) {
          chai.expect(typ === TestClass).to.be.true;
          chai.expect(val).to.equal(typ[key]);
          chai.expect(self).to.equal(this);
          items++;
        }, this);
        chai.expect(items).to.equal(classEnum.AllKeys.length);
      });
    });
  });
}


