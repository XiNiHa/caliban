(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{367:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"schemas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schemas"}},[t._v("#")]),t._v(" Schemas")]),t._v(" "),e("p",[t._v("A GraphQL schema will be derived automatically at compile-time (no reflection) from the types present in your resolver.\nThe table below shows how common Scala types are converted to GraphQL types.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Scala Type")]),t._v(" "),e("th",[t._v("GraphQL Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",[t._v("Int")]),t._v(" "),e("td",[t._v("Int")])]),t._v(" "),e("tr",[e("td",[t._v("Float")]),t._v(" "),e("td",[t._v("Float")])]),t._v(" "),e("tr",[e("td",[t._v("Double")]),t._v(" "),e("td",[t._v("Float")])]),t._v(" "),e("tr",[e("td",[t._v("String")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("java.util.UUID")]),t._v(" "),e("td",[t._v("ID")])]),t._v(" "),e("tr",[e("td",[t._v("Unit")]),t._v(" "),e("td",[t._v("Unit (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("Long")]),t._v(" "),e("td",[t._v("Long (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("BigInt")]),t._v(" "),e("td",[t._v("BigInt (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("BigDecimal")]),t._v(" "),e("td",[t._v("BigDecimal (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("java.time.Instant")]),t._v(" "),e("td",[t._v("Instant (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("java.time.LocalDate")]),t._v(" "),e("td",[t._v("LocalDate (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("java.time.LocalTime")]),t._v(" "),e("td",[t._v("LocalTime (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("java.time.LocalDateTime")]),t._v(" "),e("td",[t._v("LocalDateTime (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("java.time.OffsetDateTime")]),t._v(" "),e("td",[t._v("OffsetDateTime (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("java.time.ZonedDateTime")]),t._v(" "),e("td",[t._v("ZonedDateTime (custom scalar)")])]),t._v(" "),e("tr",[e("td",[t._v("Case Class")]),t._v(" "),e("td",[t._v("Object")])]),t._v(" "),e("tr",[e("td",[t._v("Sealed Trait")]),t._v(" "),e("td",[t._v("Enum or Union")])]),t._v(" "),e("tr",[e("td",[t._v("Option[A]")]),t._v(" "),e("td",[t._v("Nullable A")])]),t._v(" "),e("tr",[e("td",[t._v("List[A]")]),t._v(" "),e("td",[t._v("List of A")])]),t._v(" "),e("tr",[e("td",[t._v("Set[A]")]),t._v(" "),e("td",[t._v("List of A")])]),t._v(" "),e("tr",[e("td",[t._v("Seq[A]")]),t._v(" "),e("td",[t._v("List of A")])]),t._v(" "),e("tr",[e("td",[t._v("Vector[A]")]),t._v(" "),e("td",[t._v("List of A")])]),t._v(" "),e("tr",[e("td",[t._v("A => B")]),t._v(" "),e("td",[t._v("A and B")])]),t._v(" "),e("tr",[e("td",[t._v("(A, B)")]),t._v(" "),e("td",[t._v("Object with 2 fields "),e("code",[t._v("_1")]),t._v(" and "),e("code",[t._v("_2")])])]),t._v(" "),e("tr",[e("td",[t._v("Either[A, B]")]),t._v(" "),e("td",[t._v("Object with 2 nullable fields "),e("code",[t._v("left")]),t._v(" and "),e("code",[t._v("right")])])]),t._v(" "),e("tr",[e("td",[t._v("Map[A, B]")]),t._v(" "),e("td",[t._v("List of Object with 2 fields "),e("code",[t._v("key")]),t._v(" and "),e("code",[t._v("value")])])]),t._v(" "),e("tr",[e("td",[t._v("ZIO[R, Nothing, A]")]),t._v(" "),e("td",[t._v("A")])]),t._v(" "),e("tr",[e("td",[t._v("ZIO[R, Throwable, A]")]),t._v(" "),e("td",[t._v("Nullable A")])]),t._v(" "),e("tr",[e("td",[t._v("Future[A]")]),t._v(" "),e("td",[t._v("Nullable A")])]),t._v(" "),e("tr",[e("td",[t._v("ZStream[R, Throwable, A]")]),t._v(" "),e("td",[t._v("A (subscription) or List of A (query, mutation)")])]),t._v(" "),e("tr",[e("td",[t._v("Json (from "),e("a",{attrs:{href:"https://github.com/circe/circe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Circe"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("td",[t._v("Json (custom scalar, need "),e("code",[t._v("import caliban.interop.circe.json._")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[t._v("Json (from "),e("a",{attrs:{href:"https://github.com/playframework/play-json",target:"_blank",rel:"noopener noreferrer"}},[t._v("play-json"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("td",[t._v("Json (custom scalar, need "),e("code",[t._v("import caliban.interop.play.json._")]),t._v(")")])])])]),t._v(" "),e("p",[t._v("See the "),e("a",{attrs:{href:"#custom-types"}},[t._v("Custom Types")]),t._v(" section to find out how to support your own types.")]),t._v(" "),e("p",[t._v("If you want Caliban to support other standard types, feel free to "),e("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("file an issue"),e("OutboundLink")],1),t._v(" or even a PR.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Schema derivation issues")]),t._v(" "),e("p",[t._v("Magnolia (the library used to derive the schema at compile-time) sometimes has some trouble generating schemas with a lot of nested types, or types reused in multiple places.\nto deal with this, you can declare schemas for your case classes and sealed traits explicitly:")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" roleSchema      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Role"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" characterSchema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("Make sure those implicits are in scope when you call "),e("code",[t._v("graphQL(...)")]),t._v(". This will make Magnolia's job easier by pre-generating schemas for those classes and re-using them when needed.\nThis will also improve compilation times and generate less bytecode.")])]),t._v(" "),e("h2",{attrs:{id:"enums-unions-interfaces"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enums-unions-interfaces"}},[t._v("#")]),t._v(" Enums, unions, interfaces")]),t._v(" "),e("p",[t._v("A sealed trait will be converted to a different GraphQL type depending on its content:")]),t._v(" "),e("ul",[e("li",[t._v("a sealed trait with only case objects will be converted to an "),e("code",[t._v("ENUM")])]),t._v(" "),e("li",[t._v("a sealed trait with only case classes will be converted to a "),e("code",[t._v("UNION")])])]),t._v(" "),e("p",[t._v('GraphQL does not support empty objects, so in case a sealed trait mixes case classes and case objects, a union type will be created and the case objects will have a "fake" field named '),e("code",[t._v("_")]),t._v(" which is not queryable.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sealed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" ORIGIN\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" ORIGIN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" EARTH "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" ORIGIN\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" MARS  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" ORIGIN\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" BELT  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" ORIGIN\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The snippet above will produce the following GraphQL type:")]),t._v(" "),e("div",{staticClass:"language-graphql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Origin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BELT")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EARTH")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MARS")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Here's an example of union:")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sealed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" Role\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" Role "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Captain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shipName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Role\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Engineer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("specialty"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Role\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" Mechanic "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Role\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The snippet above will produce the following GraphQL type:")]),t._v(" "),e("div",{staticClass:"language-graphql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Role")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Captain "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Engineer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Mechanic\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Captain")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("shipName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Engineer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("specialty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mechanic")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If you prefer an "),e("code",[t._v("Interface")]),t._v(" instead of a "),e("code",[t._v("Union")]),t._v(" type, add the "),e("code",[t._v("@GQLInterface")]),t._v(" annotation to your sealed trait.\nAn interface will be created with all the fields that are common to the case classes extending the sealed trait, as long as they return the same type.")]),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("p",[t._v("To declare a field that take arguments, create a dedicated case class representing the arguments and make the field a "),e("em",[t._v("function")]),t._v(" from this class to the result type.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" FilterArgs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Option"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Queries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("characters"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FilterArgs "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The snippet above will produce the following GraphQL type:")]),t._v(" "),e("div",{staticClass:"language-graphql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Queries")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("characters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("origin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Caliban provides auto-derivation for common types such as "),e("code",[t._v("Int")]),t._v(", "),e("code",[t._v("String")]),t._v(", "),e("code",[t._v("List")]),t._v(", "),e("code",[t._v("Option")]),t._v(", etc. but you can also support your own types by providing an implicit instance of "),e("code",[t._v("caliban.schema.ArgBuilder")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("There is no "),e("code",[t._v("ArgBuilder")]),t._v(" for tuples. If you have multiple arguments, use a case class containing all of them instead of a tuple.")])]),t._v(" "),e("h2",{attrs:{id:"effects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#effects"}},[t._v("#")]),t._v(" Effects")]),t._v(" "),e("p",[t._v("Fields can return ZIO effects. This allows you to leverage all the features provided by ZIO: timeouts, retries, access to ZIO environment, memoizing, etc. An effect will be run every time a query requiring the corresponding field is executed.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Queries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("characters"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Task"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   character"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CharacterName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" RIO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("If you don't use ZIO environment ("),e("code",[t._v("R")]),t._v(" = "),e("code",[t._v("Any")]),t._v("), there is nothing special to do to get it working.")]),t._v(" "),e("p",[t._v("If you require a ZIO environment, you will need to have the content of "),e("code",[t._v("caliban.schema.GenericSchema[R]")]),t._v(" for your custom "),e("code",[t._v("R")]),t._v(" in scope when you call "),e("code",[t._v("graphQL(...)")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" schema "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" GenericSchema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyEnv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n")])])]),e("h2",{attrs:{id:"annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#annotations"}},[t._v("#")]),t._v(" Annotations")]),t._v(" "),e("p",[t._v("Caliban supports a few annotations to enrich data types:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('@GQLName("name")')]),t._v(" allows you to specify a different name for a data type or a field.")]),t._v(" "),e("li",[e("code",[t._v('@GQLInputName("name")')]),t._v(" allows you to specify a different name for a data type used as an input (by default, the suffix "),e("code",[t._v("Input")]),t._v(" is appended to the type name).")]),t._v(" "),e("li",[e("code",[t._v('@GQLDescription("description")')]),t._v(" lets you provide a description for a data type or field. This description will be visible when your schema is introspected.")]),t._v(" "),e("li",[e("code",[t._v('@GQLDeprecated("reason")')]),t._v(" allows deprecating a field or an enum value.")]),t._v(" "),e("li",[e("code",[t._v("@GQLInterface")]),t._v(" to force a sealed trait generating an interface instead of a union.")]),t._v(" "),e("li",[e("code",[t._v("@GQLDirective(directive: Directive)")]),t._v(" to add a directive to a field or type.")])]),t._v(" "),e("h2",{attrs:{id:"java-8-time-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-8-time-types"}},[t._v("#")]),t._v(" Java 8 Time types")]),t._v(" "),e("p",[t._v("Caliban provides implicit "),e("code",[t._v("Schema")]),t._v(" types for the standard "),e("code",[t._v("java.time")]),t._v(" types, by default these will use the\nISO standard strings for serialization and deserialization. However, you can customize this behavior by using\nexplicit constructor available under the "),e("code",[t._v("ArgBuilder")]),t._v(" companion object. For instance, you can specify an "),e("code",[t._v("instantEpoch")]),t._v("\nto handle instants which are encoded using a "),e("code",[t._v("Long")]),t._v(" from the standard java epoch time (January 1st 1970 00:00:00).\nFor some time formats you can also specify a specific "),e("code",[t._v("DateTimeFormatter")]),t._v(" to handle your particular date time needs.")]),t._v(" "),e("h2",{attrs:{id:"custom-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-types"}},[t._v("#")]),t._v(" Custom types")]),t._v(" "),e("p",[t._v("Caliban provides auto-derivation for common types such as "),e("code",[t._v("Int")]),t._v(", "),e("code",[t._v("String")]),t._v(", "),e("code",[t._v("List")]),t._v(", "),e("code",[t._v("Option")]),t._v(", etc. but you can also support your own types by providing an implicit instance of "),e("code",[t._v("caliban.schema.Schema")]),t._v(".")]),t._v(" "),e("p",[t._v("An easy way to do this is to reuse existing instances and use "),e("code",[t._v("contramap")]),t._v(" to map from your type to the original type. Here's an example of creating an instance for "),e("a",{attrs:{href:"https://github.com/fthomas/refined",target:"_blank",rel:"noopener noreferrer"}},[t._v("refined"),e("OutboundLink")],1),t._v("'s "),e("code",[t._v("NonEmptyString")]),t._v(" reusing existing instance for "),e("code",[t._v("String")]),t._v(" (if you use "),e("code",[t._v("refined")]),t._v(", you might want to look at "),e("a",{attrs:{href:"https://github.com/niqdev/caliban-extras#caliban-refined",target:"_blank",rel:"noopener noreferrer"}},[t._v("caliban-refined"),e("OutboundLink")],1),t._v(")):")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" nonEmptyStringSchema"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NonEmptyString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stringSchema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contramap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("You can also use the "),e("code",[t._v("scalarSchema")]),t._v(" helper to create your own scalar types, providing a name, an optional description, and a function from your type to a "),e("code",[t._v("ResponseValue")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" unitSchema"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scalarSchema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" None"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" ObjectValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("If you are using a custom type as part of the input you also have to provide an implicit instance of "),e("code",[t._v("caliban.schema.ArgBuilder")]),t._v(". For example here's how to do that for "),e("code",[t._v("java.time.LocalDate")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" localDateArgBuilder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ArgBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LocalDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" StringValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    Try"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LocalDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fold"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" Left"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ExecutionError"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Can\'t parse $value into a LocalDate"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" innerThrowable "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Right"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" other "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" Left"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ExecutionError"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Can\'t build a LocalDate from input $other"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Value classes ("),e("code",[t._v("case class SomeWrapper(self: SomeType) extends AnyVal")]),t._v(") will be unwrapped by default.")]),t._v(" "),e("h2",{attrs:{id:"code-generation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[t._v("#")]),t._v(" Code generation")]),t._v(" "),e("p",[t._v("Caliban can automatically generate Scala code from a GraphQL schema.")]),t._v(" "),e("p",[t._v("In order to use this feature, add the "),e("code",[t._v("caliban-codegen-sbt")]),t._v(" sbt plugin to your project and enable it.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[t._v("addSbtPlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.github.ghostdogpr"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caliban-codegen-sbt"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.9.2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nenablePlugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CodegenPlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Then call the "),e("code",[t._v("calibanGenSchema")]),t._v(" sbt command.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[t._v("calibanGenSchema schemaPath outputPath "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("scalafmtPath path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("headers name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name2"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("packageName name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("effect fqdn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Effect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ncalibanGenSchema project"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphql src"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("MyAPI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scala\n")])])]),e("p",[t._v("This command will create a Scala file in "),e("code",[t._v("outputPath")]),t._v(" containing all the types defined in the provided GraphQL schema defined at "),e("code",[t._v("schemaPath")]),t._v(". Instead of a file, you can provide a URL and the schema will be obtained using introspection.")]),t._v(" "),e("p",[t._v("The generated code will be formatted with Scalafmt using the configuration defined by "),e("code",[t._v("--scalafmtPath")]),t._v(" option (default: "),e("code",[t._v(".scalafmt.conf")]),t._v("). If you provide a URL for "),e("code",[t._v("schemaPath")]),t._v(", you can provide request headers with "),e("code",[t._v("--headers")]),t._v(" option.")]),t._v(" "),e("p",[t._v("The package of the generated code is derived from the folder of "),e("code",[t._v("outputPath")]),t._v(". This can be overridden by providing an alternative package with the "),e("code",[t._v("--packageName")]),t._v(" option.")]),t._v(" "),e("p",[t._v("By default, each Query and Mutation will be wrapped into a "),e("code",[t._v("zio.UIO")]),t._v(" effect. This can be overridden by providing an alternative effect with the "),e("code",[t._v("--effect")]),t._v(" option.")])])}),[],!1,null,null,null);a.default=n.exports}}]);