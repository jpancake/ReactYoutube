/* globals document, window */
import 'babel-polyfill'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import { jsdom } from 'jsdom'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = window.navigator
global.expect = chai.expect

chai.use(sinonChai)
chai.use(require('chai-enzyme')())

