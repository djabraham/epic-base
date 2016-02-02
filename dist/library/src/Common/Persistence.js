var Persistence;
(function (Persistence) {
    var LocalStore = (function () {
        function LocalStore() {
        }
        LocalStore.setItem = function (key, value) {
            this.backup[key] = value;
            if (this.ls) {
                this.ls.setItem(key, value);
            }
            return value;
        };
        LocalStore.getItem = function (key) {
            var value = this.backup[key];
            if (this.ls) {
                value = this.ls.getItem(key);
            }
            return value;
        };
        LocalStore.ls = localStorage;
        LocalStore.backup = {};
        return LocalStore;
    })();
    Persistence.LocalStore = LocalStore;
})(Persistence || (Persistence = {}));
//# sourceMappingURL=Persistence.js.map