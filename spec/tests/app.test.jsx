import React from 'react';
import { shallow, mount, render } from 'enzyme';
import puppeteer from 'puppeteer';
const pageUrl = 'http://localhost:3002';
import MainImage from './../../client/src/components/main-image';


let page;
let browser;
const width = 1280;
const height = 720

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('Main Image', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  it('renders correctly', async () => {
    expect(shallow(<MainImage/>).find('div.main-image').exists()).toBe(true);
  });

  it('renders an image', async () => {
    const wrapper = shallow(<MainImage/>);
    console.log('test');
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
