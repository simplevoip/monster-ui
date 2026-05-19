import { join } from 'upath';
import gulp from 'gulp';
import { writeFileSync } from 'fs';
import { tmp } from '../paths.js';
import pkg from '../../package.json' with { type: 'json' };

const { version } = pkg;

/**
 * Writes version file to display in monster
 */
const writeVersion = () => {
	const fileName = join(tmp, 'VERSION');
	writeFileSync(fileName, version);
	return gulp.src(fileName);
};

export default writeVersion;
