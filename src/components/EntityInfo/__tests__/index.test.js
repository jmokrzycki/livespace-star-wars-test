import React from "react";
import { render, screen } from "@testing-library/react";
import { TextInfo, LinkInfo, ArrayInfo } from "../index";
import { BrowserRouter } from 'react-router-dom'

describe("TextInfo component", () => {
  test("it should render caption and text", () => {
    render(<TextInfo caption="Caption" text="Some Text" />);
    const captionElement = screen.getByText("Caption");
    const textElement = screen.getByText("Some Text");
    expect(captionElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test("it should display 'n/a' if text is missing", () => {
    render(<TextInfo caption="Caption" text={null} />);
    const textElement = screen.getByText("n/a");
    expect(textElement).toBeInTheDocument();
  });

  describe("LinkInfo component", () => {
    test("it should render caption and a link when data is provided", () => {
      const data = { name: "Link Text", url: "https://example.com" };
      render(<BrowserRouter><LinkInfo caption="Caption" data={data} /></BrowserRouter>);
      const captionElement = screen.getByText("Caption");
      const linkElement = screen.getByText("Link Text");
      expect(captionElement).toBeInTheDocument();
      expect(linkElement).toBeInTheDocument();
    });
  
    test("it should display 'n/a' if data is missing", () => {
        render(<LinkInfo caption="Caption" data={null} />);
        const linkElement = screen.getByText(/n\/a/);
        expect(linkElement).toBeInTheDocument();
      });
    });
  
    describe.only("ArrayInfo component", () => {
        test("it should render caption and an array of links when data is provided", () => {
          const data = [
            { name: "Link 1", url: "https://example.com/1" },
            { name: "Link 2", url: "https://example.com/2" },
          ];
          render(<BrowserRouter><ArrayInfo caption="Caption" data={data} /></BrowserRouter>);
          const captionElement = screen.getByText("Caption");
          const link1Element = screen.getByText("Link 1");
          const link2Element = screen.getByText("Link 2");
          expect(captionElement).toBeInTheDocument();
          expect(link1Element).toBeInTheDocument();
          expect(link2Element).toBeInTheDocument();
        });
   
        test("it should display 'n/a' if data is an empty array", () => {
          render(<ArrayInfo caption="Caption" data={[]} />);
          const textElement = screen.getByText(/n\/a/);
          expect(textElement).toBeInTheDocument();
        });
   
        test("it should display 'n/a' if data is missing", () => {
          render(<ArrayInfo caption="Caption" data={null} />);
          const textElement = screen.getByText(/n\/a/);
          expect(textElement).toBeInTheDocument();
        });
      });
  });
  
  
    
