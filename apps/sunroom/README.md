# Sunroom 0.4.0 — source

[Website](https://mikechengx.github.io/sunroom/) · [Downloads](https://github.com/mikechengx/sunroom/releases)

Open the repository root `index.html` for the standalone app, with Chinese/English controls and embedded assets.

## Build

1. Download `sunroom-assets.zip` from this repository’s release. Extract it; rename the top-level `sunroom-assets` folder to `assets` and place it beside `build.mjs`.
2. Copy the unmodified ZIP beside `build.mjs` as `sunroom-cc0-assets.zip`.
3. Run `npm ci`. Install Python 3 and Pillow for texture preparation.
4. Run `node build.mjs` in this directory. Results go to repository `outputs/`.
5. Run `node --test tests/domain-test.mjs tests/floor-config-test.mjs tests/floor-geometry-test.mjs tests/i18n-test.mjs`.

`src/i18n.js` maintains interface translations. Room, item and task content authored by users is preserved. `floor-config.js` handles real tile/plank sizes and direct colours; `finishes.js` defines board/paint finishes; `geometry.js` creates parametric models; `domain.js` checks room layout; `main.js` handles rendering, saving and exports; `ui.js` controls the UI.

## 中文

根目录 `index.html` 可直接打开。重新构建时先下载素材包，解压后把顶层目录改名为 `assets`；同时保留 ZIP 并改名 `sunroom-cc0-assets.zip`，均放在本目录。执行 `npm ci`、安装 Python Pillow，再执行 `node build.mjs`。

规则与几何测试无需 GPU；运行上面的 `node --test` 命令即可。材质与第三方代码许可见本目录通知文件。预算、模型和通道检查用于规划，安装前需复核实物和现场。
