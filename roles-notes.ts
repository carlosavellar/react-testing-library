[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import { render, screen } from '@testing-library/react';\n\nconst RoleExample = () => {\n  return (\n    <div>\n      <h1>Heading </h1>\n      <button>Button</button>\n      <footer>Contentinfo</footer>\n      <header>Banner</header>\n      <img alt=\"\" />img\n      <input type=\"checkbox\" />checkbox\n      <input type=\"number\" />Spinbutton\n      <input type=\"radio\" />Radio\n      <input type=\"text\" placeholder=\"teste\" />Textbox\n      <li>ListItem</li>\n      <ul>List</ul>\n    </div>\n  );\n};\n\nrender(<RoleExample />);","type":"code","id":"po9db"},{"content":"test(\"Looping thorouht Roles\", ()=>{\n  render(<RoleExample />)\n  const roles = [\n      \"heading\",\n      \"contentinfo\",\n      \"img\",\n      \"checkbox\",\n      \"spinbutton\",\n      \"radio\",\n      \"textbox\",\n      \"listitem\",\n      \"list\"\n    ];\n\n    for(let role of roles){\n      const theRole = screen.getByRole(role);\n      expect(theRole).toBeInTheDocument()\n    }\n});","type":"code","id":"9kfti"},{"content":"import { render, screen } from '@testing-library/react';\n\nconst RoleButtons = () => {\n  return (\n    <div>\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  );\n};\n\nrender(<RoleButtons />);","type":"code","id":"3tllp"},{"content":"test(\"Testing render buttons\", ()=>{\n  render(<RoleButtons />)\n  const submitBtn = screen.getByRole(\"button\", {name: /submit/i})\n  const cencelBtn = screen.getByRole(\"button\", {name: /cancel/i})\n\n  expect(submitBtn).toBeInTheDocument()\n  expect(cencelBtn).toBeInTheDocument()\n\n});","type":"code","id":"h9xcx"},{"content":"import { render, screen } from '@testing-library/react';\n\nconst RoleButtonsNoLabel = () => {\n  return (\n    <div>\n      <button aria-label=\"sign in\"><svg /></button>\n      <button aria-label=\"sign out\"><svg /></button>\n    </div>\n  );\n};\n\nrender(<RoleButtonsNoLabel />);","type":"code","id":"8g0tg"},{"content":"test(\"Testing no label buttons\", ()=>{\n  render(<RoleButtonsNoLabel />);\n  const signInBtn = screen.getByRole(\"button\", {name: /sign in/i})\n  const signOutBtn = screen.getByRole(\"button\", {name: /sign out/i})\n\n  expect(signInBtn).toBeInTheDocument();\n  expect(signOutBtn).toBeInTheDocument();\n});","type":"code","id":"c703i"}]