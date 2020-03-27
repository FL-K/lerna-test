"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Input', function () {
  test('renders correctly', function () {
    var tree = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_["default"], null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});