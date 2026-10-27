# Sunroom

A practical 3D room planner for a first rental or a new home: precise dimensions, honest surface colours, useful storage and plans you can measure.

**[Open Sunroom](https://mikechengx.github.io/sunroom/)** · [English](https://mikechengx.github.io/sunroom/?lang=en) · [中文](https://mikechengx.github.io/sunroom/?lang=zh)

## Features

- Room shape, dimensions, editable walls/corners, doors, windows and sills.
- 40 parametric furniture and household-tool templates, including nine wall-storage options.
- Furniture size, position, height, finish and colour. White painted cabinets render with white boards and legs.
- Tile or plank floors with individual unit sizes, direct colour, grout, laying pattern and matte/satin/polished finishes.
- Quantified floor use, storage, clearance checks and indicative budgets.
- Local saving, JSON import/export, undo/redo, alternatives, five camera views and PNG/ZIP export.
- Chinese/English UI; user-authored project and item text is preserved.
- Phone landscape: scene on the left, independently scrolling tools on the right; tools can collapse. Portrait is also supported.

Open `index.html` directly. The single HTML embeds JavaScript, textures and a studio HDR. WebGPU is preferred with WebGL2 and editable 2D fallback modes. No account or runtime network connection is required.

Dimensions are in millimetres internally and usually centimetres in the UI. Models, budgets, storage estimates and clearance checks are planning aids; verify furniture and installation against the actual room.

## Source and assets

See [apps/sunroom](apps/sunroom/README.md) for build instructions. Source remains at this folder depth so `node build.mjs` writes to repository `outputs/`. Source, standalone HTML and CC0 raw assets are also provided in Releases. Asset and third-party notices are included in the HTML and `apps/sunroom/`.

## Migration and data

The former `https://mikechengx.github.io/launch-jelly/sunroom.html` redirects here. Both public paths share the same origin; the existing Sunroom database is reused. Local `127.0.0.1` projects use a different origin: export JSON there and import it on the public site. No project data is uploaded or automatically synchronized across devices.

## 中文

**Sunroom · 日光小屋**：面向租房与新家布置的实用三维规划工具。先配置墙、门、窗和尺寸，再摆家具与挂墙收纳；可量化查看剩余面积、收纳量、通道与预算，并导出五种视角图片。

右上角切换 中文 / EN。地砖和木地板均可改每块尺寸、颜色、缝隙与光泽；白色漆面柜体显示纯白。手机横屏为左侧预览、右侧可收起工具栏。

独立网址与仓库均为 `sunroom`。线上旧网址自动跳转且沿用同源存档；本地预览项目可用 JSON 迁移。数据仅保存在当前浏览器，不会跨设备同步。
