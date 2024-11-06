(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{631:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_lib/Modules/Class/Shared",function(){return n(1823)}])},1823:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return o}});var l=n(2676),r=n(2140),i=n(8745);let o=[{depth:2,value:"Classes",id:"classes"},{depth:3,value:"Inheritance",id:"inheritance"},{depth:3,value:"Encapsulation",id:"encapsulation"},{depth:2,value:"OxClass",id:"oxclass"},{depth:3,value:"Attributes",id:"attributes"},{depth:2,value:"lib.class",id:"libclass"},{depth:3,value:"Parameters",id:"parameters"},{depth:3,value:"Returns",id:"returns"},{depth:3,value:"Example",id:"example"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",h3:"h3",code:"code",pre:"pre",span:"span"},(0,i.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Shared"}),"\n",(0,l.jsx)(e.h2,{id:"classes",children:"Classes"}),"\n",(0,l.jsx)(e.p,{children:"A class is a template for creating objects with set attributes and behaviours."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Though Lua does not typically support object-oriented programming, it is possible to simulate it with ",(0,l.jsx)(e.a,{href:"https://www.lua.org/manual/5.4/manual.html#2.4",children:"metatables"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["Our implementation of classes are loosely based on ",(0,l.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",children:"JavaScript"}),"."]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"inheritance",children:"Inheritance"}),"\n",(0,l.jsx)(e.p,{children:"Classes can inherit attributes and behaviors from other classes, similar to how instances inherit from their parent class."}),"\n",(0,l.jsx)(e.p,{children:'When specifying a "super" class in a class declaration, you create a derived or "sub" class. This subclass inherits both fields and methods from its parent. This inheritance extends across multiple levels of derived classes, enabling class attributes to be shared throughout the class hierarchy.'}),"\n",(0,l.jsx)(e.h3,{id:"encapsulation",children:"Encapsulation"}),"\n",(0,l.jsx)(e.p,{children:"Encapsulation is the practice of bundling data (attributes) and methods (behaviors) within a class."}),"\n",(0,l.jsx)(e.p,{children:"This practice helps to organize related functionalities and prevents outside interference with the internal workings of the class. By encapsulating these elements, we promote modularity, maintain data integrity, and control how data is accessed and manipulated within a program."}),"\n",(0,l.jsx)(e.h2,{id:"oxclass",children:"OxClass"}),"\n",(0,l.jsxs)(e.p,{children:["OxClass is a blueprint used for all classes created with ",(0,l.jsx)(e.code,{children:"lib.class"}),". It provides some some basic attributes and behaviours shared by all classes."]}),"\n",(0,l.jsx)(e.h3,{id:"attributes",children:"Attributes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["__name: ",(0,l.jsx)(e.code,{children:"string"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A protected field representing the name of the class."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["constructor?: ",(0,l.jsx)(e.code,{children:"function"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A protected method used to instantiate a new object inheriting from a class."}),"\n",(0,l.jsxs)(e.li,{children:["Called by ",(0,l.jsx)(e.code,{children:"class:new(...)"})," if ",(0,l.jsx)(e.code,{children:"class:constructor()"})," exists."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["private?: ",(0,l.jsx)(e.code,{children:"table"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A protected field which holds all private data in a class."}),"\n",(0,l.jsx)(e.li,{children:"Private data cannot be accessed outside of class methods, enforcing security and data integrity."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["super?: ",(0,l.jsx)(e.code,{children:"class"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A protected method referencing the constructor of a superclass."}),"\n",(0,l.jsx)(e.li,{children:"Must be called inside a class constructor when instantiating a class."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"libclass",children:"lib.class"}),"\n",(0,l.jsx)(e.p,{children:'This function allows you to define a new class, optionally inheriting from a parent or "super" class.'}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" MyClass "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"class"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(name, super)"})]})})}),"\n",(0,l.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["name: ",(0,l.jsx)(e.code,{children:"string"})]}),"\n",(0,l.jsxs)(e.li,{children:["super?: ",(0,l.jsx)(e.code,{children:"table"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Sets the new class as a subset of the super class."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"table"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"The newly created class."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@class"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Person"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"OxClass"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" name "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Person "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"class"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Person'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Person:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"constructor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'calling Person constructor for'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", name)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    self.name "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" name"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Professor Class (extends Person)"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@class"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Professor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Person"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" teaches "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Professor "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"class"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Professor'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", Person)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Professor:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"constructor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"teaches"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'calling Professor constructor for'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", name)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    self:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"super"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(name)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    self.teaches "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" teaches"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Professor:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"introduceSelf"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"My name is %s, and I will be your %s professor."'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"):"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"format"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(self.name, self.teaches))"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Professor:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"grade"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"paper"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" grade "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"math.random"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(grade)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CreateThread"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" walter "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Professor:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Walter'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Chemistry'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    walter:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"introduceSelf"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    walter:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"grade"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my paper'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Student Class (extends Person)"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@class"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Student"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Person"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" private "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"private "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"{ "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"year"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:": "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"number "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Student "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"class"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Student'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", Person)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" name "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" year "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Student:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"constructor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"year"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'calling Student constructor for'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", name)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    self:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"super"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(name)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    self.private.year "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" year"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Student:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"introduceSelf"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"Hi! I'm %s, and I'm in year %s.\""}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"):"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"format"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(self.name, self.private.year))"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" year "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Student:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"setYear"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"year"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    self.private.year "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" year"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CreateThread"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" jesse "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Student:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Jesse'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    jesse:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"introduceSelf"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Hi! I'm Jesse, and I'm in year 2."})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    jesse:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"setYear"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    jesse:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"introduceSelf"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Hi! I'm Jesse, and I'm in year 3."})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(jesse.private.year) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- nil"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getmetatable"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(jesse.private)) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- private"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    jesse.private.year "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- error"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/overextended/ox_lib/Modules/Class/Shared.mdx",route:"/overextended/ox_lib/Modules/Class/Shared",timestamp:1730854598e3,title:"Shared",headings:o},pageNextRoute:"/overextended/ox_lib/Modules/Class/Shared"})}},function(s){s.O(0,[2601,9774,2888,179],function(){return s(s.s=631)}),_N_E=s.O()}]);