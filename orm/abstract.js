
Object.prototype.super = function () {
	return (Object.getPrototypeOf(Object.getPrototypeOf(this))).constructor.name;
}

const abstract_utils = {
	errors: {
		abstract_construction: function (className) {
			return `Abstract class ${className} cannot be instantiated without a subclass implementation.`;
		},
		abstract_implementation: function (className, callName) {
			return `Classes extending abstract class ${className} must implement ${callName}`;
		}
	}
}

class AbstractClass {

	_abstract_validate(_class) {
		if (this.constructor === _class) {
			throw new Error(abstract_utils.errors.abstract_construction(_class.name));
		}
		for (var i = 0; i < this._abstract_required.length; i++) {
			if (this[this._abstract_required[i]] === undefined) {
				throw new Error(abstract_utils.errors.abstract_implementation(_class.name, this._abstract_required[i]));
			}
		}
	}

	constructor(_class, _required) {
		if (_required) {
			this._abstract_required = _required;
		}
		this._abstract_validate(_class);
	}

}

module.exports = AbstractClass;
