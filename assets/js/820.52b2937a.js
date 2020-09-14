(window.webpackJsonp=window.webpackJsonp||[]).push([[820],{1962:function(t,e,a){"use strict";a.r(e);var r=a(21),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-sql-explorer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-sql-explorer"}},[t._v("#")]),t._v(" Using SQL Explorer")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("This Help topic will teach you how to use SQL Explorer with RadRails after you have connected to your database. This is the final step in configuring SQL Explorer to work with RadRails. You will need to "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Connecting_to_the_database_application/"}},[t._v("connect to your database")]),t._v(" before following the instructions below.")],1),t._v(" "),a("h2",{attrs:{id:"instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[t._v("#")]),t._v(" Instructions")]),t._v(" "),a("p",[t._v("This section explains how to do some of the most common tasks that you will perform in SQL Explorer.")]),t._v(" "),a("h3",{attrs:{id:"creating-a-new-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-database"}},[t._v("#")]),t._v(" Creating a new database")]),t._v(" "),a("p",[t._v("To create a new database in SQL Explorer, paste the SQL below into the SQL editor and click the "),a("strong",[t._v("Execute")]),t._v(" button:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CREATE DATABASE cookbook;\n")])])]),a("h3",{attrs:{id:"creating-a-new-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-table"}},[t._v("#")]),t._v(" Creating a new table")]),t._v(" "),a("p",[t._v("To create a new database table in SQL Explorer, paste the following SQL into your SQL Editor and click the "),a("strong",[t._v("Execute")]),t._v(" button:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CREATE TABLE `recipes` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `title` varchar(255) NOT NULL,\n  `instructions` text NOT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")])])]),a("h3",{attrs:{id:"inserting-data-into-a-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inserting-data-into-a-table"}},[t._v("#")]),t._v(" Inserting data into a table")]),t._v(" "),a("p",[t._v("To insert data into a database table in SQL Explorer, paste the following SQL code into your SQL Editor and click the "),a("strong",[t._v("Execute")]),t._v(" button:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO `recipes`\n  (title, instructions)\nVALUES\n  ('test', 'this is a test record');\n")])])]),a("h3",{attrs:{id:"querying-a-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying-a-table"}},[t._v("#")]),t._v(" Querying a table")]),t._v(" "),a("p",[t._v("To query a database table, paste the following SQL code into your SQL Editor and click the "),a("strong",[t._v("Execute")]),t._v(" button:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT *\n  FROM `recipes`;\n")])])]),a("p",[t._v("Additionally, you can use a generated SELECT statement to query a table. To generate a SELECT statement:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In the Database Structure View, navigate to the table that you want to query.")])]),t._v(" "),a("li",[a("p",[t._v("Right-click the table that you want to query, and select "),a("strong",[t._v("Generate Select Statement")]),t._v(" from the context menu.")])])]),t._v(" "),a("p",[t._v("SQL Explorer generates the SELECT statement for you.")]),t._v(" "),a("h3",{attrs:{id:"additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[t._v("#")]),t._v(" Additional resources")]),t._v(" "),a("p",[t._v("The following list includes additional links for SQL Explorer documentation:")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("*"),a("strong",[t._v("SQL Explorer web site and documentation")]),t._v(" - "),a("a",{attrs:{href:"http://eclipsesql.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://eclipsesql.sourceforge.net/"),a("OutboundLink")],1),t._v("\n*"),a("strong",[t._v("MySQL 5.1 Reference")]),t._v(" - "),a("a",{attrs:{href:"http://dev.mysql.com/doc/refman/5.1/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://dev.mysql.com/doc/refman/5.1/en/index.html"),a("OutboundLink")],1),t._v("\n*"),a("strong",[t._v("Configuring SQLExplorer Access")]),t._v(" - "),a("a",{attrs:{href:"http://www.onjava.com/pub/a/onjava/2005/05/11/sqlexplorer.html?page=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.onjava.com/pub/a/onjava/2005/05/11/sqlexplorer.html?page=2"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"related-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[t._v("#")]),t._v(" Related Topics")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Configuring_the_Eclipse_SQL_Explorer_plug-in/"}},[t._v("Configuring the Eclipse SQL Explorer plug-in")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Installing_the_SQL_Explorer_plug-in/"}},[t._v("Installing the SQL Explorer plug-in")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Deploying_ConnectorJ/"}},[t._v("Deploying ConnectorJ")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Creating_a_new_driver_in_Eclipse/"}},[t._v("Creating a new driver in Eclipse")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Creating_a_new_connection_in_SQL_Explorer/"}},[t._v("Creating a new connection in SQL Explorer")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Connecting_to_the_database_application/"}},[t._v("Connecting to the database application")])],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);