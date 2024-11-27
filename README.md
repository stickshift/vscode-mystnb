# MyST Notebook VS Code Extension

> Work with MyST Markdown Notebooks in VS Code's Jupyter editor.

VS Code's Jupyter extension let's you run your notebooks directly in your IDE without needing a separate Jupyter server. MyST let's you write Jupyter notebooks entirely in Markdown. `vscode-mystnb` is a VS Code extension that bridges the gap between these two.

## Workflow

`vscode-mystnb` automatically synchronizes content between the MyST Markdown representation and Jupyter.

### Create a MyST Markdown Document

Create a new file called `demo.md` with the following content:

````
---
title: "MyST Demo"
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.16.4
kernelspec:
  name: python3
  display_name: Python 3
---

What's 1 + 2?

```{code-cell}
1 + 2
```

````

Right click on demo.md in Explorer, select Open With..., choose Jupyter Notebook. 

You should now have the same demo.md document open in two tabs. The first presents the document in Markdown; the second shows it in Jupyter. If you save changes in either tab, they should show up in the other.