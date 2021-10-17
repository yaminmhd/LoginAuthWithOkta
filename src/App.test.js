import rewire from "rewire"
import React from "react"
import ReactDOM from "react-dom"
const App = rewire("./App")
const onAuthRequired = App.__get__("onAuthRequired")
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("onAuthRequired", () => {
    test("0", () => {
        let object = [["http://www.example.com/route/123?foo=bar", "www.google.com", "https://api.telegram.org/"], ["www.google.com", "http://base.com", "https://croplands.org/app/a/reset?token="], ["www.google.com", "http://www.croplands.org/account/confirm?t=", "https://twitter.com/path?abc"]]
        let callFunction = () => {
            onAuthRequired({ history: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["https://api.telegram.org/bot", "https://croplands.org/app/a/confirm?t=", "http://www.example.com/route/123?foo=bar"], ["http://www.example.com/route/123?foo=bar", "www.google.com", "https://api.telegram.org/"], ["https://croplands.org/app/a/reset?token=", "Www.GooGle.com", "https://"]]
        let callFunction = () => {
            onAuthRequired({ history: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["https://croplands.org/app/a/reset?token=", "https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["http://base.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "Www.GooGle.com"], ["ponicode.com", "https://croplands.org/app/a/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let callFunction = () => {
            onAuthRequired({ history: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["http://www.example.com/route/123?foo=bar", "ponicode.com", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://twitter.com/path?abc", "http://base.com", "https://api.telegram.org/bot"], ["https://api.telegram.org/", "https://", "https://twitter.com/path?abc"]]
        let callFunction = () => {
            onAuthRequired({ history: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["www.google.com", "http://www.croplands.org/account/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://croplands.org/app/a/confirm?t=", "https://twitter.com/path?abc", "https://api.telegram.org/bot"], ["https://croplands.org/app/a/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s", "http://www.croplands.org/account/confirm?t="]]
        let callFunction = () => {
            onAuthRequired({ history: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            onAuthRequired({ history: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
