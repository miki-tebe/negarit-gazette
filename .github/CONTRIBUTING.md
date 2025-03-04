## Contributing

---

- Check in the repo and discussions if the proclamation you want to contribute is already added.
- Tell us the proclamation you are thinking to contribute in the discussions.
- Read the folder structure, meta modification and MDX style guidelines.
- Create pull requests.

### Folder Structure

The folder structure is very similar with [Federal-Negarit-Gazeta](https://github.com/opengazeta/federal-negarit-gazeta#folder-organization).

Proclamations are under [pages/proclamations](../pages/proclamations) folder which organized in folders named after the gregorian-calendar year they were released `eg. Proclamation No. 481/2006 is under 2006 (/pages/proclamations/2006) folder`

And proclamation nameing format is like `<proclamation_no>.<lang>.mdx` where

- \<proclamation_no> is the incrementing ID of the proclamation (1, 2, ... )
- \<lang> is the language used for the proclamation (en, am, ...)

Example 

`Proclamation No. 481/2006 will be stored as 481.am.mdx and/or 481.en.mdx`

### Meta Modification

Before or after adding a folder or a file the meta data must be updated.

Example 


When adding Proclamation No. 433/2005 to /pages/proclamations/2005, 
/pages/proclamation/meta.en.json and/or /pages/proclamation/meta.am.json must be updated to include "2005": "2005".

And before or after adding Proclamation No. 433/2005 as /pages/proclamations/2005/433.en.mdx and/or /pages/proclamations/2005/433.am.mdx
/pages/proclamations/2005/meta.en.json and/or /pages/proclamations/2005/meta.am.json must be updated to include "433": "Proclamation No. <proclamation_no>/<year> - <abstract>"
where <abstract> is the brief abstract that describes the purpose of the proclamation.


`For Proclamation No. 433/2005 the meta will: "433": "Proclamation No. 433/2005 - Revised Federal Ethics and Anti-Corruption Commission Establishment Proclamation"`

*Check out the meta already commited to better understand it [proclamations meta](../pages/proclamations/meta.en.json), [2006 meta](../pages/proclamations/2006/meta.en.json)*

### MDX Style Guide

---

```markdown
# Proclamation No. <proclamation_no>/<year>

---

# A PROCLAMATION TO PROVIDE FOR <abstract>


## PART ONE

### GENERAL PROVISION

### 1. Short Title

### 2. Definitions

    1/ For nested list use code format markdown 

    ```
    a) If there is another nested list under code formated list used Tabs

        i) Lorem ipsum dolor sit amet

        ii) Lorem ipsum dolor sit amet

    b) Lorem ipsum dolor sit amet
    ```

#### <section_no>. Effective Date

    This Proclamation shall come into force upon publication in the Federal Negarit Gazeta.

**Done at Addis Ababa, this <date>th day of <month>, <year>**

> ##### <president_name>
>
> ##### PRESIDENT OF THE FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA

``` 

**Example**

```
# Proclamation No. 481/2006

---

# A PROCLAMATION TO PROVIDE FOR PLANT BREEDERS’ RIGHT

    WHEREAS, the utilization of new plant varieties developed through research play a significant  role in improving agricultural production and productivity;
    
    .
    .
    .

## PART ONE

### GENERAL PROVISION

#### 1. Short Title

    This Proclamation may be cited as the “Plant Breeders’ Right Proclamation No. 481/2006.”

#### 2. Definitions

    In this Proclamation unless the context otherwise requires:

    1/ “applicant” means a person who has filed an application with the Ministry for a plant breeders’ right;
    
    
    ...........


    3/ “breeder” means a person who:

    ```
    a) has bred and developed a new plant variety; or

    b) has employed or commissioned the work of the person who has bred or developed a
       new plant variety; or

    c) is a successor in title of the person mentioned in (a) or (b) of this Sub-Article;

    ```
    
    ...........


    5/ “new plant variety” means a variety that:

    ```
    a/ by reason of one or more identifiable characteristics, is clearly distinguishable from
       all other varieties the existence of which is a matter of common knowledge at the
       date of application for a plant breeders’ right;

    b/ is stable in its essential characteristics, in that after repeated reproduction or
       multiplication, at the end of each cycle, remains true to its description;

    c/ having regard to its particular features of sexual reproduction or vegetative
       propagation, is sufficiently homogenous or is a well-defined multi-line; and

    d/ its material has not been sold or otherwise disposed of to others by the breeder for
       purposes of commercial exploitation of the variety:

        i) in the territory of Ethiopia, earlier than one year before the date of filling of
           application for plant breeders’ right with the Ministry; or

        ii) in the territory of any other state, earlier than six years in the case of varieties of
            tree, fruit tree or grape vines, or in the case of other species, earlier than four
            years before the date of the application.
    ```

    ...........


#### 34. Effective Date

    This Proclamation shall come into force upon publication in the Federal Negarit Gazeta.

**Done at Addis Ababa, this 27th day of February, 2006**

> ##### GIRMA WOLDEGIORGIS
>
> ##### PRESIDENT OF THE FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA

```

**Output**

The above example result looks like:

![](/public/mdx_output_1.PNG)
![](/public/mdx_output_2.PNG)
![](/public/mdx_output_3.PNG)
![](/public/mdx_output_4.PNG)
![](/public/mdx_output_5.PNG)


For more information check out [MDXJS](https://mdxjs.com/) documentation


### Commit message format 

---

Commit message should be formatted as 
```
  git commit -m "proclamation <proclamation_no>/<year>"
```

**Example**
```
  git commit -m "proclamation 481/2006"
```

### Style Guidelines

---

1. Use consistent formatting for headings, subheadings, and lists.
2. Use proper indentation for nested lists and code blocks.
3. Use code formatting for nested lists and ensure proper alignment.
4. Use consistent naming conventions for files and folders.
5. Use proper markdown syntax for links, images, and code blocks.
6. Ensure proper spacing and alignment for readability.

### Commit Message Guidelines

---

1. Use a clear and concise commit message format.
2. Include the proclamation number and year in the commit message.
3. Use the format: `git commit -m "proclamation <proclamation_no>/<year>"`.
4. Example: `git commit -m "proclamation 481/2006"`.

### Pull Request Guidelines

---

1. Ensure your pull request follows the guidelines mentioned in this document.
2. Provide a clear and concise description of the changes made.
3. Reference the related issue or discussion in the pull request description.
4. Ensure your code follows the style guidelines and passes any tests or checks.
5. Be responsive to feedback and make necessary changes promptly.

**For any question or suggestion use [discussions](https://github.com/miki-tebe/negarit-gazette/discussions)**
