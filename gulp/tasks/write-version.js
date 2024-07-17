// import { join } from 'upath';
import pkg from 'upath';
const { join } = pkg;
import gulp from 'gulp';
import { writeFileSync } from 'fs';
import { tmp } from '../paths.js';
import packageFile from '../../package.json' with { type: 'json' };
const { version } = packageFile;

/**
 * Writes version file to display in monster
 */
const writeVersion = () => {
	const fileName = join(tmp, 'VERSION');
	writeFileSync(fileName, version);
	return gulp.src(fileName);
};

export default writeVersion;
